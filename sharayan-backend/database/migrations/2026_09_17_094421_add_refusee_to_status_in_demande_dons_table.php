<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('demande_dons', function (Blueprint $table) {
            //
            DB::statement("ALTER TABLE demande_dons MODIFY status ENUM('en_attente', 'acceptee', 'refusee', 'terminee') DEFAULT 'en_attente'");

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('demande_dons', function (Blueprint $table) {
            //
            DB::statement("ALTER TABLE demande_dons MODIFY status ENUM('en_attente', 'acceptee', 'terminee') DEFAULT 'en_attente'");

        });
    }
};
