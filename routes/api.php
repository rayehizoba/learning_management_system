<?php

use App\Http\Controllers\CountryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\LearningPathController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

See this tutorial
https://www.toptal.com/laravel/restful-laravel-api-tutorial
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['cors'])->group(function () {
    Route::get('courses', [CourseController::class, 'index']);
    Route::get('courses/{course}', [CourseController::class, 'show']);
    Route::post('courses', [CourseController::class, 'store']);
    Route::put('courses/{course}', [CourseController::class, 'update']);
    Route::delete('courses/{course}', [CourseController::class, 'delete']);
    Route::get('courses/{course}/sections', [CourseController::class, 'indexSections']);
    Route::post('courses/{course}/sections', [CourseController::class, 'storeSections']);

    Route::get('quizzes', [QuizController::class, 'index']);
    Route::get('quizzes/{quiz}', [QuizController::class, 'show']);
    Route::delete('quizzes/{quiz}', [QuizController::class, 'delete']);
    Route::get('quizzes/{quiz}/questions', [QuizController::class, 'indexQuestions']);

    Route::get('learning_paths', [LearningPathController::class, 'index']);
    Route::get('learning_paths/{learning_path}', [LearningPathController::class, 'show']);
    Route::post('learning_paths', [LearningPathController::class, 'store']);
    Route::put('learning_paths/{learning_path}', [LearningPathController::class, 'update']);
    Route::delete('learning_paths/{learning_path}', [LearningPathController::class, 'delete']);

    Route::get('groups', [GroupController::class, 'index']);
    Route::get('groups/{group}', [GroupController::class, 'show']);
    Route::post('groups', [GroupController::class, 'store']);
    Route::put('groups/{group}', [GroupController::class, 'update']);
    Route::delete('groups/{group}', [GroupController::class, 'delete']);

    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{user}', [UserController::class, 'show']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{user}', [UserController::class, 'update']);
    Route::delete('users/{user}', [UserController::class, 'delete']);

    Route::get('folders', [FolderController::class, 'index']);
    Route::get('folders/{folder}', [FolderController::class, 'show']);
    Route::post('folders', [FolderController::class, 'store']);
    Route::put('folders/{folder}', [FolderController::class, 'update']);
    Route::delete('folders/{folder}', [FolderController::class, 'delete']);

    Route::get('files', [FileController::class, 'index']);
    Route::get('files/{file}', [FileController::class, 'show']);
    Route::post('files', [FileController::class, 'store']);
    Route::put('files/{file}', [FileController::class, 'update']);
    Route::delete('files/{file}', [FileController::class, 'delete']);

    Route::get('countries', [CountryController::class, 'index']);

});

