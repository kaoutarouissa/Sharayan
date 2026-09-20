<?php

namespace App\Http\Controllers;

use App\Models\DemandeDon;
use App\Models\DemandeTransfusion;
use Illuminate\Http\Request;

class EspaceUrgenceController extends Controller
{
    //
    public function index(){
        $demandeTransfusion=DemandeTransfusion::where('status','en_attente')->where('niveau_urgence', 'urgente')->get();
        return response()->json([
            'demande'=>$demandeTransfusion
        ], 200);

    }
}
