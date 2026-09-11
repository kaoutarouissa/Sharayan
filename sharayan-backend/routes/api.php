<?php

use App\Http\Controllers\Authcontroller;
use Illuminate\Support\Facades\Route;

Route::post('/register', [Authcontroller::class, 'register']);
Route::post('/login', [Authcontroller::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [Authcontroller::class, 'logout']);
    Route::put('/profile', [Authcontroller::class, 'updateProfil']);

});