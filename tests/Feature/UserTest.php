<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Section;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class UserTest extends TestCase
{
    use WithFaker;

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
            'email' => $this->faker->unique()->safeEmail(),
            'password' => 'password',
            'phone' => $this->faker->phoneNumber(),
            'gender' => 'male',
            'website' => $this->faker->url(),
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
