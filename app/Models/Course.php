<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $appends = ['learners_count'];

    public function sections(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Section::class);
    }

    /**
     * Get all the learners for the course.
     */
    public function learners(): \Illuminate\Database\Eloquent\Relations\MorphToMany
    {
        return $this->morphToMany(User::class, 'learnable');
    }

    /**
     * @return int
     */
    public function getLearnersCountAttribute()
    {
        return $this->learners()->count();
    }
}
