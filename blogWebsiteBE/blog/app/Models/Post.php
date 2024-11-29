<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'slug',
        'title',
        'content',
        'main_image',
        'author',
        'categories',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    protected $casts = [
        'author' => 'array',
        'categories' => 'array',
    ];
}
