<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'User 01',
            'user_name' => 'user01',
            'email' => 'user01@gmail.com',
            'password' => bcrypt('user01')
        ]);

        User::create([
            'name' => 'User 02',
            'user_name' => 'user02',
            'email' => 'user02@gmail.com',
            'password' => bcrypt('user02')
        ]);
    }
}
