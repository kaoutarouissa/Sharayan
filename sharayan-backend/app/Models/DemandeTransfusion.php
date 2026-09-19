<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class DemandeTransfusion extends Model
{
    //
    protected $fillable = [
        'user_id',
        'date_transfusion',
        'hopital',
        'groupe_sanguin',
        'niveau_urgence',
        'motif',
        'status',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function stock()
    {
        return $this->belongsTo(stock::class);
    }
}
