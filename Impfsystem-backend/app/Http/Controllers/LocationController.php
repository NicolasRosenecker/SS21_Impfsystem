<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use http\Env\Response;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use App\Models\Location;
use App\Models\Vaccination;




class LocationController extends Controller
{
    public function index(){
        return Location::with(['vaccinations'])->get();
    }

    public function show(Location $location){
        return view('locations.show', compact('location'));
    }

    // find location by postal code
    public function findByPostalCode(int $postalCode) : Location {
        return Location::where('postal_code', $postalCode)
            ->with(['vaccinations'])
            ->first();
    }

    // check if locations exists, false if not
    public function checkPostalCode(int $postalCode) {
        $location = Location::where('postal_code', $postalCode)->first();
        return $location != null ? response()->json(true, 200) : response()->json(false,
            200);
    }

    public function findBySearchTerm(string $searchTerm) {
        $location = Location::
            where('location_name', 'LIKE', '%' . $searchTerm. '%')
            ->orWhere('location_address' , 'LIKE', '%' . $searchTerm. '%')
            ->orWhere('location_description' , 'LIKE', '%' . $searchTerm. '%')->get();
        return $location;
    }


    public function save (Request $request) : JsonResponse {
        DB::beginTransaction();
        try {
            $location = Location::create($request->all());
            DB::commit();
            return response()->json($location, 201);
        }

        catch (\Exception $e) {

            DB::rollBack();
            return response()->json("saving location failed: " . $e->getMessage(), 420);

        }


    }

    public function update (Request $request, int $postalCode) : JsonResponse {

        DB::beginTransaction();

        try {
            $location = Location::where('postal_code', $postalCode)->first();

            if ($location != null) {
                $location->update($request->all());
                $location->save();
            }

            DB::commit();
            $location1 = Location::where('postal_code', $postalCode)->first();
            return response()->json($location1, 201);

        }

        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("update location failed: " . $e->getMessage(), 420);
        }
    }

    public function delete(int $postalCode) : JsonResponse{
        $location = Location::where('postal_code', $postalCode)->first();
        if($location != null){
            $location->delete();
        }
        else{
            throw new \Exception("location does not exist");
        }
        return response()->json('location (' . $postalCode . ') successfully deleted', 200);
    }


}
