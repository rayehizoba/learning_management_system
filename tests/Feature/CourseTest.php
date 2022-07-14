<?php

namespace Tests\Feature;

use App\Models\Course;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class CourseTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function courses_are_listed_correctly(): void
    {
        $courses = Course::factory()->count(2)->create();

        $response = $this->get('/api/courses')
            ->assertStatus(200)
            ->assertJson($courses->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'published', 'description', 'created_at', 'updated_at'],
            ]);
    }

    /** @test */
    public function courses_are_created_correctly()
    {
        $payload = [
            'name' => $this->faker->name(),
            'description' => $this->faker->paragraph(),
        ];

        $this->assertEmpty(Course::count());

        $this->post('/api/courses', $payload)
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => $payload['name'], 'description' => $payload['description']]);

        $this->assertNotEmpty(Course::count());
    }

    /** @test */
    public function courses_are_updated_correctly()
    {
        $course = Course::factory()->create();

        $payload = [
            'name' => $this->faker->name(),
            'description' => $this->faker->paragraph(),
        ];

        $this->put('/api/courses/'.$course->id, $payload)
            ->assertStatus(200)
            ->assertJson(['id' => 1, 'name' => $payload['name'], 'description' => $payload['description']]);
    }
}
