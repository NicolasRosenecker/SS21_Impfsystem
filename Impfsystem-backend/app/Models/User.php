<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Relations\HasOne;


class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'social_security_number',
        'birth_date',
        'gender',
        'email',
        'password',
        'phone',
        'is_admin',
        'is_vaccinated'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function isAdmin() {
        return boolval($this->is_admin);
    }

    public function getJWTCustomClaims(){
        return ["user" => [
            "id" => $this->id,
            "firstname" => $this->firstname,
            "lastname" => $this->lastname,
            "social_security_number" => $this->social_security_number,
            "birthdate" => $this->birth_date,
            "gender" => $this->gender,
            "phone" => $this->phone,
            "email" => $this->email,
            "is_admin" => $this->is_admin,
            "is_vaccinated" => $this->is_vaccinated,
        ]];
    }
    public function vaccination() : HasOne{
        return $this->hasOne(Vaccination::class);
    }

}

