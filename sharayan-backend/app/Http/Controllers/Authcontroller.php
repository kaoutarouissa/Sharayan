<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
// use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\HasApiTokens;

class Authcontroller extends Controller
{
    //
    use HasApiTokens;
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'

        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Email ou mot de passe incorrect',
            ], 401);
        }
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Login réussi',
            'token' => $token,
            'user' => $user,
        ], 200);

    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'telephone' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:7|confirmed',
            'role' => 'required|in:admin,patient,donneur',
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'telephone' => $request->telephone,
            'role' => $request->role
        ]);
        return response()->json([
            "message" => 'Compte enregistré avec succès',
            "data" => $user

        ], 201);

    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Déconnexion réussie'
        ]);
    }
    public function updateProfil(Request $request)
    {
        $user = $request->user();
        $validate = $request->validate([
            'name' => 'required|string',
            'telephone' => 'required|string',
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($user->id),
            ],
        ]);
        $user->update($validate);
        return response()->json([
            'message' => 'Profil modifié avec succès',
            'user' => $user
        ]);
    }
}
