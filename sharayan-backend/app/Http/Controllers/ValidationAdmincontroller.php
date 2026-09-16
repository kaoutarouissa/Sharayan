<?php

namespace App\Http\Controllers;

use App\Models\DemandeDon;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse as HttpFoundationJsonResponse;

class ValidationAdmincontroller extends Controller
{
    public function accepteDemandeDon(int $id)
    {
        $demande = DemandeDon::where('id', $id)->first();

        if (!$demande) {
            return response()->json([
                'message' => 'Demande introuvable'
            ], 404);
        }

        $donneur = User::where('id', $demande->user_id)->first();

        $age = Carbon::parse($donneur->date_naissance)->age;

        if ($demande->status !== "en_attente") {
            return response()->json([
                'message' => 'La demande est déjà acceptée'
            ], 422);
        }

        if ($age < 18) {
            return response()->json([
                'message' => 'Le donneur doit avoir au moins 18 ans'
            ], 422);
        }

        // Vérifier le dernier don terminé
        $dernierDemande = DemandeDon::where('user_id', $demande->user_id)
            ->where('status', 'terminee')
            ->latest('date_prelevement')
            ->first();

        // Vérifier le délai de 4 mois
        if ($dernierDemande) {
            if (
                Carbon::parse($dernierDemande->date_prelevement)
                    ->addMonths(4)
                    ->isFuture()
            ) {
                return response()->json([
                    'message' => 'Le donneur doit attendre 4 mois depuis son dernier prélèvement.'
                ], 422);
            }
        }

        $demande->status = "acceptee";
        $demande->save();

        return response()->json([
            'message' => 'La demande est acceptée'
        ], 200);
    }


    public function terminerDemande(int $id)
    {
        $demande = DemandeDon::where('id', $id)->first();
        if ($demande->status !== "acceptee") {
            return response()->json([
                'message' => 'lA DEMANDE PAS ENCORE ACCCEPTEE',
                "demande" => $demande
            ], 422);
        }
        if ($demande->status === "acceptee" && $demande->date_prelevement) {
            $demande->status = "terminee";
            $demande->save();
            return response()->json([
                'message' => 'le prélèvement  est fait et sera ajouter au stock sanguin',
                "demande" => $demande
            ], 200);
        }
    }
    /**
     * 
     * 
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
