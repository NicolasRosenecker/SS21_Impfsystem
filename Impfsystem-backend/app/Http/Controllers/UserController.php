<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(){
        return User::with([])->get();
    }

    // find user by ID
    public function findByID(int $id) : User {
        return User::where('id', $id)
            ->with([])
            ->first();
    }

    // check if user is vaccinated
    public function isVaccinated(int $id) : bool {
        $user = User::where('id', $id)
            ->with([])
            ->first();
        return $user->is_vaccinated;
    }

    // check if user is admin
    public function isAdmin(int $id) {
        $user = User::where('id', $id)->first();
        return response()->json(boolval($user->is_admin));
    }


    public function save (Request $request) : JsonResponse {

        DB::beginTransaction();
        try {

            // executed separately in order to encrypt password
            $user = User::create([
                "firstname" => $request->firstname,
                "lastname"=> $request->lastname,
                "social_security_number"=> $request->social_security_number,
                "birth_date"=> $request->birth_date,
                "gender"=> $request->gender,
                "email"=> $request->email,
                "password"=> bcrypt($request->password),
                "phone"=> $request->phone,
                "is_admin"=> $request->is_admin,
                "is_vaccinated"=> $request->is_vaccinated
                ]);

            DB::commit();
            return response()->json($user, 201);
        }

        catch (\Exception $e) {

            DB::rollBack();
            return response()->json("saving user failed: " . $e->getMessage(), 420);

        }
    }

    public function update (Request $request, int $id) : JsonResponse {

        DB::beginTransaction();

        try {
            $user = User::where('id', $id)->first();

            if ($user != null) {
                $user->update([
                    "firstname" => $request->firstname,
                    "lastname"=> $request->lastname,
                    "social_security_number"=> $request->social_security_number,
                    "birth_date"=> $request->birth_date,
                    "gender"=> $request->gender,
                    "email"=> $request->email,
                    "password"=> bcrypt($request->password),
                    "phone"=> $request->phone,
                    "is_admin"=> $request->is_admin,
                    "is_vaccinated"=> $request->is_vaccinated
                ]);
                $user->save();

            }

            DB::commit();
            $user1 = User::where('id', $id)->first();
            return response()->json($user1, 201);
        }

        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("update user failed: " . $e->getMessage(), 420);
        }
    }

    public function delete(int $id) : JsonResponse{
        $user = User::where('id', $id)->first();
        if($user != null){
            $user->delete();
        }
        else{
            throw new \Exception("user does not exist");
        }
        return response()->json('user (' . $id . ') successfully deleted', 200);
    }
}
