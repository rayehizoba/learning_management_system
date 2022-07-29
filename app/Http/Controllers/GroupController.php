<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Section;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Group::all();
    }

    public function show(Group $group): Group
    {
        return $group;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $group = Group::create($request->all());
        return response()->json($group, 201);
    }

    public function update(Request $request, Group $group): \Illuminate\Http\JsonResponse
    {
        $group->update($request->all());
        return response()->json($group, 200);
    }

    public function delete(Group $group): \Illuminate\Http\JsonResponse
    {
        $group->delete();
        return response()->json(null, 204);
    }
}
