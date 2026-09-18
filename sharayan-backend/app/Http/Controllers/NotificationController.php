<?php

namespace App\Http\Controllers;

use App\Models\DemandeDon;
use App\Models\Notification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $notification = Notification::where('user_id', Auth::id())->get();
        return response()->json([
            'notifications' => $notification
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $notification = $request->validate([
            'contenu' => 'required|string'
        ]);
        $demandeDon = DemandeDon::where("status", "acceptee")->get();
        $user = User::where('id', $demandeDon->user_id)->first();
        if ($demandeDon) {

            $notificationS = Notification::create([$notification]);
            return response()->json([
                'message' => 'message d accepte sera envoyee',
                'demandeMessage' => $notification
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
    public function show(Notification $notification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notification $notification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Notification $notification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notification $notification)
    {
        //
    }
}
