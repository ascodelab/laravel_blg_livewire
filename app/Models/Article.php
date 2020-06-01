<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $connection = "mysql_blog";
    protected $table = "wp_posts";
}
