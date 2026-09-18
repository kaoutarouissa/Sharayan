<?php

namespace App\Http\Controllers;

use App\Models\DemandeDon;
use App\Models\DemandeTransfusion;
use App\Models\Notification;
use App\Models\stock;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Psy\Readline\Hoa\Console;
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

        $notification = Notification::create([
            'user_id' => $demande->user_id,
            'contenu' => 'Votre demande de don a été acceptée. Veuillez vous présenter à l’hôpital à la date prévue pour le prélèvement.'

        ]);
        return response()->json([
            'message' => 'La demande est acceptée',
            'notification' => $notification
        ], 200);
    }


    public function terminerDemandeDon(int $id)
    {
        $groupesSanguins = [
            "A+",
            'A-',
            'B+',
            'B-',
            'AB+',
            'AB-',
            'O+',
            'O-'

        ];
        $groupeSanguin = $groupesSanguins[array_rand($groupesSanguins)];
        $demande = DemandeDon::where('id', $id)->first();
        $user = User::where('id', $demande->user_id)->first();
        if ($demande->status !== "acceptee") {
            return response()->json([
                'message' => 'lA DEMANDE PAS ENCORE ACCCEPTEE',
                "demande" => $demande
            ], 422);
        }
        if ($demande->status === "acceptee" && $demande->date_prelevement) {
            $demande->status = "terminee";
            $demande->groupe_sanguin = $groupeSanguin;
            $user->groupe_sanguin = $groupeSanguin;
            $demande->save();
            $user->save();
            Stock::create([
                'demande_don_id' => $demande->id,
                'groupe_sanguin' => $groupeSanguin,
                'date_expiration' => Carbon::parse($demande->date_prelevement)->addDays(42),
                'quantite' => 1,
                'status' => 'disponible'
            ]);
            return response()->json([
                'message' => 'le prélèvement  est fait et sera ajouter au stock sanguin',
                "demande" => $demande
            ], 200);
        }
    }

    public function refuserDemandeDon(int $id)
    {
        $demande = DemandeDon::where('id', $id)->first();
        if (!$demande) {
            return response()->json([
                'message' => 'Demande introvable'
            ], 404);
        }
        $donneur = User::where('id', $demande->user_id)->first();
        $age = Carbon::parse($donneur->date_naissance)->age;
        if ($demande->status !== "en_attente") {
            return response()->json([
                'message' => 'La demande est déjà traitée'
            ], 422);
        }
        if ($age < 18) {

            $demande->status = "refusee";
            $demande->save();

            return response()->json([
                'message' => 'La demande est refusée : le donneur doit avoir au moins 18 ans'
            ], 200);
        }
        $dernierDemande = DemandeDon::where('user_id', $demande->user_id)
            ->where('status', 'terminee')
            ->latest('date_prelevement')
            ->first();
        if ($dernierDemande) {

            if (
                Carbon::parse($dernierDemande->date_prelevement)
                    ->addMonths(4)
                    ->isFuture()
            ) {

                $demande->status = "refusee";
                $demande->save();

                return response()->json([
                    'message' => 'La demande est refusée : le donneur doit attendre 4 mois.'
                ], 200);
            }
        }
        return response()->json([
            'message' => 'Les conditions sont respectées, la demande peut être acceptée.'
        ], 200);

    }

    public function accepterDemandTransfusion(int $id)
    {
        $demande = DemandeTransfusion::where('id', $id)->first();

        $stock = Stock::where('groupe_sanguin', $demande->groupe_sanguin)
            ->where('quantite', '>', 0)
            ->first();

        if ($stock) {
            $demande->status = "acceptee";
            $demande->save();
            $notification = Notification::create([
                'user_id' => $demande->user_id,
                'contenu' => 'Votre demande de transfusion a été acceptée. Veuillez vous présenter à l’hôpital à la date prévue.'
            ]);
            return response()->json([
                'message' => 'demande acceptée',
                'notification' => $notification
            ]);
        }

        return response()->json([
            'message' => "Le groupe sanguin demandé n'est pas au stock"
        ]);
    }

    public function terminerDemandeTransfusion(int $id)
    {
        //
        $demande = DemandeTransfusion::whree('id', $id)->where('status', "acceptee")->first();
        if ($demande) {
            return response()->json([
                'message' => 'Demande de transfusion sanguin est terminée'
            ]);
        }
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
