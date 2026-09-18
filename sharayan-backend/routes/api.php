<?php

use App\Http\Controllers\Authcontroller;
use App\Http\Controllers\DemandeDonController;
use App\Http\Controllers\DemandeTransfusionController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\ValidationAdmincontroller;
use Illuminate\Support\Facades\Route;

Route::post('/register', [Authcontroller::class, 'register']);
Route::post('/login', [Authcontroller::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [Authcontroller::class, 'logout']);
    Route::put('/profile', [Authcontroller::class, 'updateProfil']);
    Route::post('/demandes-transfusion', [DemandeTransfusionController::class, 'store']);
    Route::get('/demandes-transfusion/historique', [DemandeTransfusionController::class, 'index']);
    Route::delete('/demandes-transfusion/delete/{demandeTransfusion}', [DemandeTransfusionController::class, 'destroy']);
    Route::put('/demandes-transfusion/update/{demandeTransfusion}', [DemandeTransfusionController::class, 'update']);
    Route::post('/demandes-don', [DemandeDonController::class, 'store']);
    Route::get('/demandes-don/historique', [DemandeDonController::class, 'index']);
    Route::put('demande-don/update/{demandeDon}', [DemandeDonController::class, 'update']);
    Route::delete('/demande-don/delete/{demandeDon}', [DemandeDonController::class, 'destroy']);
    Route::get('/admin/demandes-don', [DemandeDonController::class, 'showDemandesAdmin']);
    Route::post("/admin/accepterDon/{id}", [ValidationAdmincontroller::class, "accepteDemandeDon"]);
    Route::post("/admin/terminerDon/{id}", [ValidationAdmincontroller::class, 'terminerDemandeDon']);
    Route::post("/admin/refuserDon/{id}", [ValidationAdmincontroller::class, 'refuserDemandeDon']);
    Route::get("admin/infoStock", [StockController::class, 'infoStock']);
    Route::post("/admin/accepterTransfusion/{id}", [ValidationAdmincontroller::class, "accepterDemandTransfusion"]);
    Route::get("/admin/demande-transfusion", [DemandeTransfusionController::class, 'showDemandeTransfusionAdmin']);
    Route::get('/notifications', [NotificationController::class, 'index']);
});