<?php

namespace App\Http\Controllers;

use App\Models\DemandeTransfusion;
use Date;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date as FacadesDate;

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

            'date_transfusion' => 'required|date|after:today',
            'hopital' => 'required|string|max:255',
            'niveau_urgence' => 'required|in:urgente,prioritaire,normale',
            'motif' => 'required|string|max:1000',
        ]);
        $user = Auth::user();
        if (!$user->groupe_sanguin) {
            return response()->json([
                'message' => 'Le groupe sanguin du patient est manquant.',
            ], 422);
        }

        $today = now()->toDateString();
        if ($request->date_transfusion < $today) {
            return response()->json([
                'message' => 'La date de transfusion ne peut pas être dans le passé.',
            ], 422);
        }
        ;
        $demandeTransfusion = DemandeTransfusion::create([
            'user_id' => Auth::id(),
            'date_transfusion' => $request->date_transfusion,
            'hopital' => $request->hopital,
            'groupe_sanguin' => $user->groupe_sanguin,
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
    public function showDemandeTransfusionAdmin()
    {
        //
        $demandeTransfusion=DemandeTransfusion::with('user')->get();
        return response()->json([
            'message'=>'dispaly les demandes de transfusion',
            'demande'=>$demandeTransfusion
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DemandeTransfusion $demandeTransfusion)
    {
        //
        // DemandeTransfusion::
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DemandeTransfusion $demandeTransfusion)
    {
        //
        $demande = $request->validate([
            "date_transfusion" => 'required|date|after_or_equal:today',
            'hopital' => 'required|string',
            "motif" => 'required|string',
            'niveau_urgence' => 'required|string'
        ]);

        $demandeTransfusion->update($demande);
        return response()->json([
            "message" => "Demande de transfusion modifiée avec succès",
            "demande" => $demandeTransfusion
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DemandeTransfusion $demandeTransfusion)
    {
        //
        $demandeTransfusion->delete();
        return response()->json([
            'message' => 'demande supprimée',
            'demande' => $demandeTransfusion
        ], 200);
    }
}
