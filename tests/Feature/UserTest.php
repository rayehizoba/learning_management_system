<?php

namespace Tests\Feature;

use App\Models\Country;
use App\Models\User;
use App\Models\Section;
use Database\Seeders\CountrySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class UserTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->seed(CountrySeeder::class);
    }

    /** @test */
    public function users_are_listed_correctly(): void
    {
        $users = User::factory()->count(2)->create();
        $response = $this->get('/api/users')
            ->assertStatus(200)
            ->assertJson($users->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'created_at', 'updated_at'],
            ]);
    }

    /** @test */
    public function users_are_created_correctly(): void
    {
        $payload = [
            'name' => $this->faker->name(),
            'ssn' => $this->faker->name(),
            'gender' => rand(0,1) ? 'male' : 'female',
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'country_id' => Country::inRandomOrder()->first()->id,
            'state' => $this->faker->word(),
            'city' => $this->faker->city(),
            'postcode' => $this->faker->postcode(),
            'password' => 'password',
        ];
        $this->assertEmpty(User::count());
        $this->post('/api/users', $payload)
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => $payload['name'],]);
        $this->assertNotEmpty(User::count());
    }

    /** @test */
    public function users_are_updated_correctly(): void
    {
        $user = User::factory()->create();
        $payload = [
            'name' => $this->faker->name(),
        ];
        $this->put('/api/users/' . $user->id, $payload)
            ->assertStatus(200)
            ->assertJson(['id' => 1, 'name' => $payload['name']]);
    }

    /** @test */
    public function users_are_deleted_correctly(): void
    {
        $user = User::factory()->create();
        $this->delete('/api/users/' . $user->id)
            ->assertStatus(204);
    }
}
