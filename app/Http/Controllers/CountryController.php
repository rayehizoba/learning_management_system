<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Country::all();
    }
}
