<?php

namespace App\Http\Controllers;

use App\Models\demandeDon;
use App\Models\DemandeDon as ModelsDemandeDon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DemandeDonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $demande = DemandeDon::where('user_id', Auth::id())->get();
        return response()->json([
            'message' => 'affichage des demndes de don',
            "demande" => $demande
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $data = $request->validate([
            'hopital' => 'required|string',
            'date_prelevement' => 'required|date|after:today',
        ]);

        $demandeDon = DemandeDon::create([
            'user_id' => Auth::id(),
            'hopital' => $data['hopital'],
            'date_prelevement' => $data['date_prelevement'],
            'status' => 'en_attente',
        ]);

        return response()->json([
            'message' => 'Demande ajoutée',
            'demandeDon' => $demandeDon
        ], 201);
    }


    public function showDemandesAdmin()
    {
        //
        $demande = DemandeDon::with('user')->get();

        return response()->json([
            'message' => 'affichage des demandes de don',
            'demande' => $demande
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(demandeDon $demandeDon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, demandeDon $demandeDon)
    {
        //
        $data = $request->validate([
            "hopital" => 'required|string',
            "date_prelevement" => 'required|date|after:today'
        ]);
        $demandeDon->update($data);
        return response()->json([
            'message' => 'Modification effectuée avec succès',
            'demande' => $demandeDon
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(demandeDon $demandeDon)
    {
        //
        $demandeDon->delete();
        return response()->json([
            'message' => 'Demande supprimée avec succès',
            "demande" => $demandeDon
        ], 200);
    }
}
