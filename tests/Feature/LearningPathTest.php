<?php

namespace Tests\Feature;

use App\Models\LearningPath;
use App\Models\Section;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class LearningPathTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function learning_paths_are_listed_correctly(): void
    {
        $learning_paths = LearningPath::factory()->count(2)->create();
        $response = $this->get('/api/learning_paths')
            ->assertStatus(200)
            ->assertJson($learning_paths->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'published', 'description', 'created_at', 'updated_at'],
            ]);
    }

    /** @test */
    public function learning_paths_are_created_correctly(): void
    {
        $payload = [
            'name' => $this->faker->name(),
            'description' => $this->faker->paragraph(),
        ];
        $this->assertEmpty(LearningPath::count());
        $this->post('/api/learning_paths', $payload)
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => $payload['name'], 'description' => $payload['description']]);
        $this->assertNotEmpty(LearningPath::count());
    }

    /** @test */
    public function learning_paths_are_updated_correctly(): void
    {
        $learning_path = LearningPath::factory()->create();
        $payload = [
            'name' => $this->faker->name(),
            'description' => $this->faker->paragraph(),
        ];
        $this->put('/api/learning_paths/' . $learning_path->id, $payload)
            ->assertStatus(200)
            ->assertJson(['id' => 1, 'name' => $payload['name'], 'description' => $payload['description']]);
    }

    /** @test */
    public function learning_paths_are_deleted_correctly(): void
    {
        $learning_path = LearningPath::factory()->create();
        $this->delete('/api/learning_paths/' . $learning_path->id)
            ->assertStatus(204);
    }
}
