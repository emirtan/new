<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\View\View;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::paginate(20);

        $posts->getCollection()->transform(function ($post) {
            $post->author = json_decode($post->author, true);
            $post->categories = json_decode($post->categories, true);
            return $post;
        });
        
        return response()->json($posts);
    }

    public function show(Request $request, $postId)
    {
        $user = JWTAuth::parseToken()->authenticate();
        
        $post = Post::where('id', $postId)->first();

        $post = Post::where('id', $postId)->first();

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $post->author = json_decode($post->author, true);
        $post->categories = json_decode($post->categories, true);
        
        return response()->json($post);
    }

    public function checkToken(Request $request)
    {
        try
        {
           $user = JWTAuth::parseToken()->authenticate();

           return response()->json(['user' => $user], 200);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Token geçersiz veya süresi dolmuş.'], 401);
        }
    }

    public function add(Request $request)
        {
            try {
                $user = JWTAuth::parseToken()->authenticate();

                $validatedData = $request->validate([
                    'title' => 'required|string|max:255',
                    'content' => 'required|string',
                    'main_image' => 'nullable|string',
                    'author' => 'required|array',
                    'author.name' => 'required|string',
                    'author.surname' => 'required|string',
                    'author.image' => 'required|string',
                    'categories' => 'required|array',
                    'categories.*.title' => 'required|string',
                    'categories.*.color' => 'required|string',
                ]);

                $slug = Str::slug($request->title);

                $todayPostCount = Post::where('user_id', $user->id)
                    ->whereDate('created_at', Carbon::today())
                    ->count();

                if ($todayPostCount >= 3) {
                    return response()->json(['error' => 'Bugün için yalnızca 3 post ekleyebilirsiniz.'], 400);
                }

                if (Post::where('slug', $slug)->exists()) {
                    $slug = $slug . '-' . Str::random(6); // Add randomness if slug exists
                }

                $post = Post::create([
                    'user_id' => $user->id,
                    'slug' => $slug,
                    'title' => $request->title,
                    'content' => $request->content,
                    'main_image' => $request->main_image,
                    'author' => json_encode($request->author),
                    'categories' => json_encode($request->categories)
                ]);

                return response()->json($post, Response::HTTP_OK);
            } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
                // Handle JWT authentication exceptions
                return response()->json(['error' => 'Token geçersiz veya süresi dolmuş.'], 401);
            } catch (\Throwable $e) {
                // Handle other exceptions
                return response()->json(['error' => 'Post oluşturulurken bir hata oluştu', 'message' => $e->getMessage()], 500);
            }
        }


        public function delete(Request $request, $postId)
        {
            try
            {
               $user = JWTAuth::parseToken()->authenticate();

               $post = Post::where('id', $postId)
               ->first();

               if (!$post) {
                return response()->json(['error' => 'Post bulunamadı veya yetkiniz yok.'], 404);
               }

               $post->delete();
    
               return response()->json(['user' => $user], 200);
            } catch (JWTException $e) {
                return response()->json(['error' => 'Token geçersiz veya süresi dolmuş.'], 401);
            }
        }
}
