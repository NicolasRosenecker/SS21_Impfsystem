<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DateTime;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // =================================================================
        // user 1 (no admin, unvaccinated)
        // =================================================================
        $user1 = new \App\Models\User;
        $user1->firstname = "Herbert";
        $user1->lastname = "Mustermann";
        $user1->social_security_number = 4401121299;
        $user1->birth_date = new DateTime();
        $user1->gender = "m";
        $user1->email = "herbert@test.at";
        $user1->password = bcrypt("test");
        $user1->phone = "+43123456789012";
        $user1->is_Admin = false;
        $user1->is_vaccinated = false;
        $user1->save();


        // =================================================================
        // user 2 (admin, unvaccinated)
        // =================================================================
        $user2 = new \App\Models\User;
        $user2->firstname = "Hermine";
        $user2->lastname = "Musterfrau";
        $user2->social_security_number = 4401121298;
        $user2->birth_date = new DateTime();
        $user2->gender = "w";
        $user2->email = "hermine@test.at";
        $user2->password = bcrypt("test");
        $user2->phone = "+43123456789012";
        $user2->is_Admin = true;
        $user2->is_vaccinated = false;
        $user2->save();

        // =================================================================
        // user 3 (no admin, vaccinated)
        // =================================================================
        $user3 = new \App\Models\User;
        $user3->firstname = "Max";
        $user3->lastname = "Mustermann";
        $user3->social_security_number = 4401121297;
        $user3->birth_date = new DateTime();
        $user3->gender = "m";
        $user3->email = "Max@test.at";
        $user3->password = bcrypt("test");
        $user3->phone = "+43123456789011";
        $user3->is_Admin = false;
        $user3->is_vaccinated = true;
        $user3->save();
    }
}
