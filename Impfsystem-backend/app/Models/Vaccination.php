<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vaccination extends Model
{
    use HasFactory;

    protected $fillable = [
        'location_id',
        'vaccination_date',
        'vaccination_name',
        'max_participants',
        'participants',
    ];

    public function location() : BelongsTo{
        return $this->belongsTo(Location::class);
    }

    public function users() : HasMany{
        return $this->hasMany(User::class);
    }
}


