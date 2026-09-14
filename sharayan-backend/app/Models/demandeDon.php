<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DemandeDon extends Model
{
    protected $fillable = [
        'user_id',
        'groupe_sanguin',
        'status',
        'date_prelevement',
        'hopital',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}


