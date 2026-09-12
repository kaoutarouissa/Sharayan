<?php

namespace App\Http\Controllers;

use App\Models\DemandeTransfusion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DemandeTransfusionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $demandeTransfusion = DemandeTransfusion::where('user_id', Auth::id())->get();
        return response()->json([
            'message' => 'demande affichée',
            'demandeTransfusion' => $demandeTransfusion
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([

            'date_transfusion' => 'required|date',
            'hopital' => 'required|string|max:255',
            'groupe_sanguin' => 'required|in:A+,A-,B+,B-,AB+,AB-,O+,O-',
            'niveau_urgence' => 'required|in:urgente,prioritaire,normale',
            'motif' => 'required|string|max:1000',
        ]);

        $demandeTransfusion = DemandeTransfusion::create([
            'user_id' => Auth::id(),
            'date_transfusion' => $request->date_transfusion,
            'hopital' => $request->hopital,
            'groupe_sanguin' => $request->groupe_sanguin,
            'niveau_urgence' => $request->niveau_urgence,
            'motif' => $request->motif,


        ]);
        return response()->json([
            'message' => 'Demande de transfusion fait avec succès',
            'demande' => $demandeTransfusion
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(DemandeTransfusion $demandeTransfusion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DemandeTransfusion $demandeTransfusion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DemandeTransfusion $demandeTransfusion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DemandeTransfusion $demandeTransfusion)
    {
        //
    }
}
