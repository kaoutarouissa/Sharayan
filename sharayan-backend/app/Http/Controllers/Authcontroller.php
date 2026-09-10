<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class Authcontroller extends Controller
{
    //
    public function login()
    {

    }

    public function register(Request $request)
    {
        $request->validate([
            'name'=>'required|string',
            'telephone'=>'required|string',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|string|min:7|confirmed',
            'role'=>'required|in:admin,patient,donneur',          'role'=>'required|in:admin,donneur,patient',
        ]);
         $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'telephone'=>$request->telephone,
            'role'=>$request->role
    ]);
        return response()->json([
            "massage"=>'Compte enregistré avec succès',
            "data"=>$user

        ],201);

    }

    public function lougout()
    {

    }
}
