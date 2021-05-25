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

        // =================================================================
        // location 3, vaccine 5 and 6
        // =================================================================
        $location3 = new \App\Models\Location;
        $location3->postal_code = "4632";
        $location3->location_name = "Pichl bei Wels";
        $location3->location_address = "Pichlerstraße 12";
        $location3->location_description = "Ein tolles Mehrzweckgebäude der Stadt Pichl bei Wels.";
        $location3->save();

        $vaccine5 = new \App\Models\Vaccination;
        $vaccine5->vaccination_date = new DateTime();
        $vaccine5->vaccination_name = "Astra Zeneca";
        $vaccine5->max_participants = 100;
        $vaccine5->participants = 1;

        $vaccine6 = new \App\Models\Vaccination;
        $vaccine6->vaccination_date = new DateTime();
        $vaccine6->vaccination_name = "Moderna";
        $vaccine6->max_participants = 100;
        $vaccine6->participants = 7;

        $location3->vaccinations()->saveMany([$vaccine5, $vaccine6]);

        // =================================================================
        // location 4, vaccine 7 and 8
        // =================================================================
        $location4 = new \App\Models\Location;
        $location4->postal_code = "4616";
        $location4->location_name = "Marchtrenk";
        $location4->location_address = "Marchtrenkerstraße 12";
        $location4->location_description = "Ein tolles Mehrzweckgebäude der Stadt Marchtrenk.";
        $location4->save();

        $vaccine7 = new \App\Models\Vaccination;
        $vaccine7->vaccination_date = new DateTime();
        $vaccine7->vaccination_name = "Astra Zeneca";
        $vaccine7->max_participants = 100;
        $vaccine7->participants = 1;

        $vaccine8 = new \App\Models\Vaccination;
        $vaccine8->vaccination_date = new DateTime();
        $vaccine8->vaccination_name = "Moderna";
        $vaccine8->max_participants = 100;
        $vaccine8->participants = 7;

        $location4->vaccinations()->saveMany([$vaccine7, $vaccine8]);

        // =================================================================
        // location 5, vaccine 9 and 10
        // =================================================================
        $location5 = new \App\Models\Location;
        $location5->postal_code = "4063";
        $location5->location_name = "Hörsching";
        $location5->location_address = "Hörschingerstraße 12";
        $location5->location_description = "Ein tolles Mehrzweckgebäude der Stadt Hörsching.";
        $location5->save();

        $vaccine9 = new \App\Models\Vaccination;
        $vaccine9->vaccination_date = new DateTime();
        $vaccine9->vaccination_name = "Astra Zeneca";
        $vaccine9->max_participants = 100;
        $vaccine9->participants = 1;

        $vaccine10 = new \App\Models\Vaccination;
        $vaccine10->vaccination_date = new DateTime();
        $vaccine10->vaccination_name = "Moderna";
        $vaccine10->max_participants = 100;
        $vaccine10->participants = 7;

        $location5->vaccinations()->saveMany([$vaccine9, $vaccine10]);

        // =================================================================
        // location 6, vaccine 11 and 12
        // =================================================================
        $location6 = new \App\Models\Location;
        $location6->postal_code = "4621";
        $location6->location_name = "Sipbachzell";
        $location6->location_address = "Sipbachzellerstraße 12";
        $location6->location_description = "Ein tolles Mehrzweckgebäude der Stadt Sipbachzell.";
        $location6->save();

        $vaccine11 = new \App\Models\Vaccination;
        $vaccine11->vaccination_date = new DateTime();
        $vaccine11->vaccination_name = "Astra Zeneca";
        $vaccine11->max_participants = 100;
        $vaccine11->participants = 1;

        $vaccine12 = new \App\Models\Vaccination;
        $vaccine12->vaccination_date = new DateTime();
        $vaccine12->vaccination_name = "Moderna";
        $vaccine12->max_participants = 100;
        $vaccine12->participants = 7;

        $location6->vaccinations()->saveMany([$vaccine11, $vaccine12]);


    }
}
