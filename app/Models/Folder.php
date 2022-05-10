<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    use HasFactory;

    protected $guarded = [];

    // return one level of child items
    public function children(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Folder::class, 'parent_id');
    }

    // recursive relationship
    public function descendants(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->children()->with('descendants');
    }

    // return one level of parent items
    public function parent(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Folder::class, 'parent_id');
    }

    // recursive relationship
    public function ancestors(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->parent()->with('ancestors');
    }

    /**
     * Scope a query to only include root folders.
     *
     * @param $query
     * @return mixed
     */
    public function scopeRoot($query): mixed
    {
        return $query->where('parent_id', null);
    }
}
