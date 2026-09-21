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
            $notification = Notification::create([
                'user_id' => $demande->user_id,
                'contenu' => 'Votre demande de don n°' . $demande->id . 'ne peut pas être acceptée car est déjà acceptée.'
            ]);
            return response()->json([
                'message' => 'La demande est déjà acceptée',
                'notification' => $notification
            ], 422);
        }

        if ($age < 18) {
            $notification = Notification::create([
                'user_id' => $demande->user_id,
                'contenu' => 'Votre demande de don n°' . $demande->id . 'ne peut pas être acceptée car vous devez avoir au moins 18 ans.'
            ]);
            return response()->json([
                'message' => 'Le donneur doit avoir au moins 18 ans',
                'notification' => $notification
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
                $notification = Notification::create([
                    'user_id' => $demande->user_id,
                    'contenu' => 'Votre demande de don n°' . $demande->id . ' ne peut pas être acceptée car vous devez attendre 4 mois depuis votre dernier prélèvement ' . $demande->date_prelevement . '.'
                ]);
                return response()->json([
                    'message' => 'Le donneur doit attendre 4 mois depuis son dernier prélèvement.',
                    'notification' => $notification
                ], 422);
            }
        }

        $demande->status = "acceptee";
        $demande->save();

        $notification = Notification::create([
            'user_id' => $demande->user_id,
            'contenu' => 'Votre demande de don n°' . $demande->id . ' a été acceptée. Veuillez vous présenter à l’hôpital ' . $demande->hopital . ' à la date prévue ' . $demande->date_prelevement . ' pour le prélèvement.'

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
            $notification = Notification::create([
                'user_id' => $demande->user_id,
                'contenu' => 'Votre demande de don n°' . $demande->id . 'lA DEMANDE PAS ENCORE ACCCEPTEE'
            ]);
            return response()->json([
                'message' => 'lA DEMANDE PAS ENCORE ACCCEPTEE',
                "demande" => $demande,
                'notification' => $notification
            ], 422);
        }
        if ($demande->status === "acceptee" && $demande->date_prelevement) {
            $demande->status = "terminee";
            $demande->groupe_sanguin = $groupeSanguin;
            $user->groupe_sanguin = $groupeSanguin;
            $demande->save();
            $user->save();
          $stock=  Stock::create([
                'demande_don_id' => $demande->id,
                'groupe_sanguin' => $groupeSanguin,
                'date_expiration' => Carbon::parse($demande->date_prelevement)->addDays(42),
                'quantite' => 1,
                'status' => 'disponible'
            ]);
            // dd($stock);
            $notification = Notification::create([
                'user_id' => $demande->user_id,
                'contenu' => 'Votre prélèvement a été effectué avec succès. Merci pour votre don et votre engagement.'
            ]);

            return response()->json([
                'message' => 'le prélèvement  est fait et sera ajouter au stock sanguin',
                "demande" => $demande,
                "notification" => $notification,
                "stock"=>$stock
            ], 200);
        }
    }

    public function refuserDemandeDon(int $id)
    {
        $demande = DemandeDon::where('id', $id)->first();

        if (!$demande) {
            $notification = Notification::create([

                'contenu' => 'Votre demande de don n°' . $demande->id . 'ne peut pas être acceptée car est introuvable.'
            ]);
            return response()->json([
                'message' => 'Demande introuvable',
                'notification' => $notification
            ], 404);
        }

        if ($demande->status !== "en_attente") {
            return response()->json([
                'message' => 'La demande est déjà traitée'
            ], 422);
        }

        $donneur = User::where('id', $demande->user_id)->first();
        $age = Carbon::parse($donneur->date_naissance)->age;

        $contenu = '';

        if ($age < 18) {

            $contenu = 'Votre demande de don n°' . $demande->id . ' a été refusée car vous devez avoir au moins 18 ans.';

        } else {

            $dernierDemande = DemandeDon::where('user_id', $demande->user_id)
                ->where('status', 'terminee')
                ->latest('date_prelevement')
                ->first();

            if (
                $dernierDemande &&
                Carbon::parse($dernierDemande->date_prelevement)
                    ->addMonths(4)
                    ->isFuture()
            ) {

                $contenu = 'Votre demande de don n°' . $demande->id . ' a été refusée car vous devez attendre 4 mois depuis votre dernier prélèvement.';

            } else {
                $contenu = 'Votre demande de don  n°' . $demande->id . 'a été refusée car les conditions requises ne sont pas remplies.';
            }
        }

        $demande->status = "refusee";
        $demande->save();

        Notification::create([
            'user_id' => $demande->user_id,
            'contenu' => $contenu
        ]);

        return response()->json([
            'message' => 'La demande a été refusée.'
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
                'contenu' => 'Votre demande de transfusion n°' . $demande->id . ' a été acceptée. Veuillez vous présenter à l’hôpital ' . $demande->hopital . 'à la date prévue ' . $demande->date_transfusion . '.'
            ]);
            return response()->json([
                'message' => 'demande acceptée',
                'notification' => $notification
            ], 201);
        }

        return response()->json([
            'message' => "Le groupe sanguin demandé n'est pas au stock"
        ]);
    }

    public function terminerDemandeTransfusion(int $id)
    {
        //
        $demande = DemandeTransfusion::where('id', $id)->where('status', "acceptee")->first();
        if ($demande) {
            $demande->status = "terminee";
            $demande->save();
            $notification = Notification::create([
                'user_id' => $demande->user_id,
                'contenu' => 'Demande de transfusion n° ' . $demande->id . ' sanguin est terminée.'
            ]);

            return response()->json([
                'message' => 'Demande de transfusion n°' . $demande->id . ' sanguin est terminée',
                'notification' => $notification,
                'demande' => $demande
            ], 201);
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
