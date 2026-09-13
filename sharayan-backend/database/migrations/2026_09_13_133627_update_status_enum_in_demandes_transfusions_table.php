<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement("
            ALTER TABLE demande_transfusions
            MODIFY status ENUM(
                'en_attente',
                'acceptee',
                'refusee',
                'terminee'
            ) DEFAULT 'en_attente'
        ");
    }

    public function down(): void
    {
        DB::statement("
            ALTER TABLE demande_transfusions
            MODIFY status ENUM(
                'en_attente',
                'acceptee',
                'terminee'
            ) DEFAULT 'en_attente'
        ");
    }
};