<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Course::all();
    }

    public function show(Course $course): Course
    {
        return $course;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $course = Course::create($request->all());

        return response()->json($course, 201);
    }

    public function update(Request $request, Course $course): \Illuminate\Http\JsonResponse
    {
        $course->update($request->all());

        return response()->json($course, 200);
    }

    public function delete(Course $course): \Illuminate\Http\JsonResponse
    {
        $course->delete();

        return response()->json(null, 204);
    }
}
