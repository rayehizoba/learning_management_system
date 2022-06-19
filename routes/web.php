<?php

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

Route::get('/courses', function () {
    return view('courses');
})->name('courses');

Route::get('/create-course', function () {
    return view('create-course');
})->name('create-course');

Route::get('/quizes', function () {
    return view('quizes');
})->name('quizes');

Route::get('/create-quiz', function () {
    return view('create-quiz');
})->name('create-quiz');

Route::get('/files-folders', FilesFolders::class)
    ->name('files-folders');
