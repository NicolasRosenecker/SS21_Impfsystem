<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // =================================================================
        // location 1, vaccine 1 and 2
        // =================================================================
        $location1 = new \App\Models\Location;
        $location1->postal_code = "4600";
        $location1->location_name = "Wels";
        $location1->location_address = "Welserstraße 1";
        $location1->location_description = "Ein wunderschönes Allzweckgebäude der Stadt Wels.";
        $location1->save();

        $vaccine1 = new \App\Models\Vaccination;
        $vaccine1->vaccination_date = new DateTime();
        $vaccine1->vaccination_name = "Pfizer/Biontech";
        $vaccine1->max_participants = 100;
        $vaccine1->participants = 24;

        $vaccine2 = new \App\Models\Vaccination;
        $vaccine2->vaccination_date = new DateTime();
        $vaccine2->vaccination_name = "Astra Zeneca";
        $vaccine2->max_participants = 50;
        $vaccine2->participants = 50;

        $location1->vaccinations()->saveMany([$vaccine1, $vaccine2]);

        // =================================================================
        // location 2, vaccine 3 and 4
        // =================================================================
        $location2 = new \App\Models\Location;
        $location2->postal_code = "4020";
        $location2->location_name = "Linz";
        $location2->location_address = "Linzerstraße 1";
        $location2->location_description = "Ein tolles Mehrzweckgebäude der Stadt Linz.";
        $location2->save();

        $vaccine3 = new \App\Models\Vaccination;
        $vaccine3->vaccination_date = new DateTime();
        $vaccine3->vaccination_name = "Astra Zeneca";
        $vaccine3->max_participants = 99;
        $vaccine3->participants = 1;

        $vaccine4 = new \App\Models\Vaccination;
        $vaccine4->vaccination_date = new DateTime();
        $vaccine4->vaccination_name = "Moderna";
        $vaccine4->max_participants = 49;
        $vaccine4->participants = 7;

        $location2->vaccinations()->saveMany([$vaccine3, $vaccine4]);


    }
}
