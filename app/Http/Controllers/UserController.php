<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return User::all();
    }

    public function show(User $user): User
    {
        return $user;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function update(Request $request, User $user): \Illuminate\Http\JsonResponse
    {
        $user->update($request->all());
        return response()->json($user, 200);
    }

    public function delete(User $user): \Illuminate\Http\JsonResponse
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
