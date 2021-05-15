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

/*TODO: Seite 10/20 Laravel 2 Script
Seeder erstellen, Beziehungen überprüfen*/

