<?php

use App\Http\Livewire\EditCourseSection;
use App\Http\Livewire\FilesFolders;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('dashboard');

Route::get('/inbox', function () {
    return view('inbox');
})->name('inbox');

Route::get('/courses', function () {
    return view('courses');
})->name('courses');

Route::get('/courses/create', function () {
    return view('edit-course');
})->name('create-course');

Route::get('/courses/{course_id}/edit', EditCourseSection::class)
    ->name('edit-course');

Route::get('/courses/{course_id}', function ($course_id) {
    return view('course-detail', ['course_id' => $course_id]);
})->name('course-detail');

Route::get('/quizes', function () {
    return view('quizes');
})->name('quizes');

Route::get('/create-quiz', function () {
    return view('create-quiz');
})->name('create-quiz');

Route::get('/manuals', function () {
    return view('manuals');
})->name('manuals');

Route::get('/files-folders', FilesFolders::class)
    ->name('files-folders');

Route::get('/learning-path', function () {
    return view('learning-path');
})->name('learning-path');

Route::get('/public-site', function () {
    return view('public-site');
})->name('public-site');

Route::get('/individual', function () {
    return view('individual');
})->name('individual');

Route::get('/group', function () {
    return view('group');
})->name('group');

Route::get('/tracking', function () {
    return view('tracking');
})->name('tracking');

Route::get('/help', function () {
    return view('help');
})->name('help');

Route::get('/settings', function () {
    return view('settings');
})->name('settings');
