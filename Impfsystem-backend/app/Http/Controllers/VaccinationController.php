<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Vaccination;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class VaccinationController extends Controller
{
    public function index(){
        return Vaccination::with([])->get();
    }

    // find vaccination by ID
    public function findByID(int $id) : Vaccination {
        return Vaccination::where('id', $id)
            ->with([])
            ->first();
    }

    // check if participant list is full
    public function isFullyBooked(int $id) : bool {
        $vaccination = Vaccination::where('id', $id)
            ->with([])
            ->first();
        return $vaccination->participants < $vaccination->max_participants;
    }

    public function save (Request $request) : JsonResponse {

        DB::beginTransaction();
        try {

            $vaccination = Vaccination::create($request->all());

            DB::commit();
            return response()->json($vaccination, 201);
        }

        catch (\Exception $e) {

            DB::rollBack();
            return response()->json("saving vaccination failed: " . $e->getMessage(), 420);

        }
    }

    public function update (Request $request, int $id) : JsonResponse {

        DB::beginTransaction();

        try {
            $vaccination = Vaccination::where('id', $id)->first();

            if ($vaccination != null) {
                $vaccination->update($request->all());
                $vaccination->save();

            }
            DB::commit();
            $vaccination1 = Vaccination::where('id', $id)->first();
            return response()->json($vaccination1, 201);
        }

        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("update vaccination failed: " . $e->getMessage(), 420);
        }
    }

    public function delete(int $id) : JsonResponse{
        $vaccination = Vaccination::where('id', $id)->first();
        if($vaccination != null){
            $vaccination->delete();
        }
        else{
            throw new \Exception("vaccination does not exist");
        }
        return response()->json('vaccination (' . $id . ') successfully deleted', 200);
    }
}
