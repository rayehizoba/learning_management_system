<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Folder::all();
    }

    public function show(Folder $folder): Folder
    {
        return $folder;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $folder = Folder::create($request->all());
        return response()->json($folder, 201);
    }

    public function update(Request $request, Folder $folder): \Illuminate\Http\JsonResponse
    {
        $folder->update($request->all());
        return response()->json($folder, 200);
    }

    public function delete(Folder $folder): \Illuminate\Http\JsonResponse
    {
        $folder->delete();
        return response()->json(null, 204);
    }
}
