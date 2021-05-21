<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// ======================================
// Location Operations
// ======================================
Route::get('locations', [\App\Http\Controllers\LocationController::class, 'index']);

Route::get('locations/{postal_code}', [\App\Http\Controllers\LocationController::class, 'findByPostalCode']);
Route::get('locations/checkpostalcode/{postal_code}', [\App\Http\Controllers\LocationController::class, 'checkPostalCode']);
Route::get('locations/search/{searchTerm}', [\App\Http\Controllers\LocationController::class, 'findBySearchTerm']);

Route::post('location', [\App\Http\Controllers\LocationController::class, 'save']);
Route::put('location/{postal_code}', [\App\Http\Controllers\LocationController::class, 'update']);
Route::delete('location/{postal_code}', [\App\Http\Controllers\LocationController::class, 'delete']);
// ======================================

// ======================================
// Vaccination Operations
// ======================================
Route::get('vaccinations', [\App\Http\Controllers\VaccinationController::class, 'index']);
Route::get('vaccinations/{id}', [\App\Http\Controllers\VaccinationController::class, 'findByID']);
Route::get('vaccinations/isfullybooked/{id}', [\App\Http\Controllers\VaccinationController::class, 'isFullyBooked']);

// Saving a vaccine happens inside the creation process of a location
Route::put('vaccination/{id}', [\App\Http\Controllers\VaccinationController::class, 'update']);
Route::delete('vaccination/{id}', [\App\Http\Controllers\VaccinationController::class, 'delete']);
// ======================================

// ======================================
// User Operations
// ======================================
Route::get('users', [\App\Http\Controllers\UserController::class, 'index']);
Route::get('users/{id}', [\App\Http\Controllers\UserController::class, 'findByID']);
Route::get('users/isvaccinated/{id}', [\App\Http\Controllers\UserController::class, 'isVaccinated']);
Route::get('users/isadmin/{id}', [\App\Http\Controllers\UserController::class, 'isAdmin']);


Route::post('user', [\App\Http\Controllers\UserController::class, 'save']);
Route::put('user/{id}', [\App\Http\Controllers\UserController::class, 'update']);
Route::delete('user/{id}', [\App\Http\Controllers\UserController::class, 'delete']);
// ======================================

// ======================================
// Authentication
// ======================================
Route::post('auth/login', [\App\Http\Controllers\AuthController::class, 'login']);
// ======================================

// ======================================
// Routes, welche Berechtigung benötigen
// ======================================
Route::group(['middleware' => ['api', 'auth.jwt']], function(){
    Route::post('location', [\App\Http\Controllers\LocationController::class, 'save']);
    Route::put('location/{postal_code}', [\App\Http\Controllers\LocationController::class, 'update']);
    Route::delete('location/{postal_code}', [\App\Http\Controllers\LocationController::class, 'delete']);
    Route::post('auth/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});

// ======================================
