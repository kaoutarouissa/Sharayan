<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

    
        User::factory()->create([
    'name' => 'maram',
    'email' => 'maram@example.com',
    'password' => Hash::make('1234567'),
    'role' => 'donneur',
    'telephone' => '3465789',
    'date_naissance' => '1999-05-23'
]);

User::factory()->create([
    'name' => 'sara',
    'email' => 'sara@example.com',
    'password' => Hash::make('1234567'),
    'role' => 'donneur',
    'telephone' => '3465790',
    'date_naissance' => '2001-08-15'
]);

User::factory()->create([
    'name' => 'yassine',
    'email' => 'yassine@example.com',
    'password' => Hash::make('1234567'),
    'role' => 'donneur',
    'telephone' => '3465791',
    'date_naissance' => '1997-11-10'
]);
    }
}
