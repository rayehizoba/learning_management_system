<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return File::all();
    }

    public function show(File $file): File
    {
        return $file;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $file = File::create($request->all());
        return response()->json($file, 201);
    }

    public function update(Request $request, File $file): \Illuminate\Http\JsonResponse
    {
        $file->update($request->all());
        return response()->json($file, 200);
    }

    public function delete(File $file): \Illuminate\Http\JsonResponse
    {
        $file->delete();
        return response()->json(null, 204);
    }
}
