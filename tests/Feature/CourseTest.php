<?php

namespace Tests\Feature;

use App\Models\Course;
use Tests\TestCase;

class CourseTest extends TestCase
{
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
}
