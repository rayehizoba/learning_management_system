<?php

namespace Tests\Feature;

use App\Models\Country;
use App\Models\Question;
use App\Models\Quiz;
use Database\Seeders\CountrySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class CountryTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function countries_are_listed_correctly(): void
    {
        $this->seed(CountrySeeder::class);

        $countries = Country::all();

        $this->assertGreaterThan(0, $countries->count());

        $response = $this->get('/api/countries')
            ->assertStatus(200)
            ->assertJson($countries->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'iso'],
            ]);
    }
}
