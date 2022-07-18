<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Section;
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

    public function indexSections(Course $course)
    {
        return $course->sections;
    }

    public function storeSections(Request $request, Course $course)
    {
        foreach ($request->all() as $section) {
            unset($section['updated_at']);
            if (array_key_exists('id', $section)) {
                ['id' => $id] = $section;
                $course->sections()->find($id)->update($section);
            } else {
                $course->sections()->create($section);
            }
        }
        return response()->json($course->sections, 201);
    }
}
