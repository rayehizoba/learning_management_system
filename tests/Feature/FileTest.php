<?php

namespace Tests\Feature;

use App\Models\File;
use App\Models\Section;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class FileTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function files_are_listed_correctly(): void
    {
        $files = File::factory()->count(2)->create();
        $response = $this->get('/api/files')
            ->assertStatus(200)
            ->assertJson($files->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'created_at', 'updated_at'],
            ]);
    }

    /** @test */
    public function files_are_created_correctly(): void
    {
        $payload = [
            'name' => $this->faker->name(),
            'path' => $this->faker->filePath(),
        ];
        $this->assertEmpty(File::count());
        $this->post('/api/files', $payload)
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => $payload['name'],]);
        $this->assertNotEmpty(File::count());
    }

    /** @test */
    public function files_are_updated_correctly(): void
    {
        $file = File::factory()->create();
        $payload = [
            'name' => $this->faker->name(),
        ];
        $this->put('/api/files/' . $file->id, $payload)
            ->assertStatus(200)
            ->assertJson(['id' => 1, 'name' => $payload['name']]);
    }

    /** @test */
    public function files_are_deleted_correctly(): void
    {
        $file = File::factory()->create();
        $this->delete('/api/files/' . $file->id)
            ->assertStatus(204);
    }
}
