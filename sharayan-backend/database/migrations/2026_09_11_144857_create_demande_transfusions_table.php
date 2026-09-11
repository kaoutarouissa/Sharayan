<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('demande_transfusions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');

            $table->date('date_transfusion');
            $table->string('hopital');
            $table->string('groupe_sanguin');
            $table->enum('niveau_urgence', ['urgente', 'prioritaire', 'normale']);
            $table->text('motif');

            $table->enum('status', [
                'en_attente',
                'acceptee',
                'terminee'
            ])->default('en_attente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande_transfusions');
    }
};
