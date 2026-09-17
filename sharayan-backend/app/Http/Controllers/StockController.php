<?php

namespace App\Http\Controllers;

use App\Models\DemandeDon;
use App\Models\stock;
use Carbon\Carbon;
use Illuminate\Http\Request;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */

  public function infoStock()
{
    $stocks = Stock::with('demandeDon.user')->get();

    $stock = [];

    foreach ($stocks as $item) {

        if (Carbon::now()->lessThanOrEqualTo($item->date_expiration)) {
            $statusStock = 'disponible';
        } else {
            $statusStock = 'expire';
        }

        $stock[] = [
            'id' => $item->id,
            'name' => $item->demandeDon->user->name,
            'date_prelevement' => $item->demandeDon->date_prelevement,
            'groupe_sanguin' => $item->groupe_sanguin,
            'quantite_stock' => $item->quantite,
            'date_expiration' => $item->date_expiration,
            'status_stock' => $statusStock
        ];
    }

    return response()->json([
        'stock' => $stock
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
    }

    /**
     * Display the specified resource.
     */
    public function show(stock $stock)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(stock $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, stock $stock)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(stock $stock)
    {
        //
    }
}
