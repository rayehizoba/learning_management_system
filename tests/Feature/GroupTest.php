<?php

namespace Tests\Feature;

use App\Models\Group;
use App\Models\Section;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class GroupTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function groups_are_listed_correctly(): void
    {
        $groups = Group::factory()->count(2)->create();
        $response = $this->get('/api/groups')
            ->assertStatus(200)
            ->assertJson($groups->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'created_at', 'updated_at'],
            ]);
    }

    /** @test */
    public function groups_are_created_correctly(): void
    {
        $payload = [
            'name' => $this->faker->name(),
        ];
        $this->assertEmpty(Group::count());
        $this->post('/api/groups', $payload)
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => $payload['name'],]);
        $this->assertNotEmpty(Group::count());
    }

    /** @test */
    public function groups_are_updated_correctly(): void
    {
        $group = Group::factory()->create();
        $payload = [
            'name' => $this->faker->name(),
        ];
        $this->put('/api/groups/' . $group->id, $payload)
            ->assertStatus(200)
            ->assertJson(['id' => 1, 'name' => $payload['name']]);
    }

    /** @test */
    public function groups_are_deleted_correctly(): void
    {
        $group = Group::factory()->create();
        $this->delete('/api/groups/' . $group->id)
            ->assertStatus(204);
    }
}
