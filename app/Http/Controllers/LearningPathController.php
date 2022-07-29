<?php

namespace App\Http\Controllers;

use App\Models\LearningPath;
use App\Models\Section;
use Illuminate\Http\Request;

class LearningPathController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return LearningPath::all();
    }

    public function show(LearningPath $learningPath): LearningPath
    {
        return $learningPath;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $learningPath = LearningPath::create($request->all());
        return response()->json($learningPath, 201);
    }

    public function update(Request $request, LearningPath $learningPath): \Illuminate\Http\JsonResponse
    {
        $learningPath->update($request->all());
        return response()->json($learningPath, 200);
    }

    public function delete(LearningPath $learningPath): \Illuminate\Http\JsonResponse
    {
        $learningPath->delete();
        return response()->json(null, 204);
    }
}
