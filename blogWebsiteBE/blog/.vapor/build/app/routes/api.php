<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::get('/postsVer', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/posts', [PostController::class, 'index']);
Route::post('/post/{postId}', [PostController::class, 'show'])->middleware('auth:api');
Route::post('/postAdd', [PostController::class, 'add'])->middleware('auth:api');
Route::delete('/postDelete/{postId}', [PostController::class, 'delete'])->middleware('auth:api');
Route::put('/posts/{postId}', [PostController::class, 'update'])->middleware('auth:api');
Route::post('/check', [PostController::class, 'checkToken'])->middleware('auth:api');



Route::get('/', function () {
    return inertia('Home');
});
