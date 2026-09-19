<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class stock extends Model
{
    //
    protected $fillable = [
        'demande_don_id',
        'groupe_sanguin',
        'date_expiration',
        'quantite',
        'status',
    ];
    public function demandeDon()
    {
        return $this->belongsTo(DemandeDon::class, 'demande_don_id');
    }
    public function demandeTransfusion()
    {
        return $this->hasMany(DemandeTransfusion::class);
    }
}
