<?php

namespace Tests\Feature;

use App\Models\Quiz;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class QuizTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function quizzes_are_listed_correctly(): void
    {
        $quizzes = Quiz::factory()->count(2)->create();
        $response = $this->get('/api/quizzes')
            ->assertStatus(200)
            ->assertJson($quizzes->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'published'],
            ]);
    }

//    /** @test */
//    public function courses_are_created_correctly(): void
//    {
//        $payload = [
//            'name' => $this->faker->name(),
//            'description' => $this->faker->paragraph(),
//        ];
//        $this->assertEmpty(Course::count());
//        $this->post('/api/courses', $payload)
//            ->assertStatus(201)
//            ->assertJson(['id' => 1, 'name' => $payload['name'], 'description' => $payload['description']]);
//        $this->assertNotEmpty(Course::count());
//    }
//
//    /** @test */
//    public function courses_are_updated_correctly(): void
//    {
//        $course = Course::factory()->create();
//        $payload = [
//            'name' => $this->faker->name(),
//            'description' => $this->faker->paragraph(),
//        ];
//        $this->put('/api/courses/' . $course->id, $payload)
//            ->assertStatus(200)
//            ->assertJson(['id' => 1, 'name' => $payload['name'], 'description' => $payload['description']]);
//    }

    /** @test */
    public function quizzes_are_deleted_correctly(): void
    {
        $quiz = Quiz::factory()->create();
        $this->delete('/api/quizzes/' . $quiz->id)
            ->assertStatus(204);
    }

//    /** @test */
//    public function course_sections_are_listed_correctly(): void
//    {
//        $course = Course::factory()->create();
//        $sections = Section::factory()->count($count = 3)->create([
//            'course_id' => $course->id
//        ]);
//        $this->assertEquals(
//            $sections->count(),
//            Section::where('course_id', $course->id)->count()
//        );
//        $response = $this->get('/api/courses/' . $course->id . '/sections')
//            ->assertStatus(200)
//            ->assertJson($sections->toArray())
//            ->assertJsonStructure([
//                '*' => ['id', 'name']
//            ]);
//    }
//
//    /** @test */
//    public function course_sections_are_created_correctly(): void
//    {
//        $course = Course::factory()->create();
//        $payload = [
//            0 => ['name' => $this->faker->name(), 'course_id' => $course->id],
//            1 => ['name' => $this->faker->name(), 'course_id' => $course->id],
//            2 => ['name' => $this->faker->name(), 'course_id' => $course->id],
//        ];
//        $this->assertEmpty(Section::where('course_id', $course->id)->count());
//        $this->post('/api/courses/' . $course->id . '/sections', $payload)
//            ->assertStatus(201)
//            ->assertJson($sections = Section::where('course_id', $course->id)->get()->toArray());
//        $this->assertSameSize($payload, $sections);
//    }
//
//    /** @test */
//    public function course_sections_are_updated_correctly(): void
//    {
//        $course = Course::factory()
//            ->has(Section::factory()->count(3))
//            ->create();
//        $payload = [
//            ...$course->sections->toArray(),
//            ['name' => $this->faker->name(), 'course_id' => $course->id]
//        ];
//        $this->assertEquals(
//            count($course->sections),
//            Section::where('course_id', $course->id)->count()
//        );
//        $this->post('/api/courses/' . $course->id . '/sections', $payload)
//            ->assertStatus(201)
//            ->assertJson($sections = Section::where('course_id', $course->id)->get()->toArray());
//        $this->assertSameSize($payload, $sections);
//    }
}
