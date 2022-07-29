<?php

namespace Tests\Feature;

use App\Models\Folder;
use App\Models\Section;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

/*
 * See this tutorial
 * https://www.toptal.com/laravel/restful-laravel-api-tutorial
 * */

class FolderTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function folders_are_listed_correctly(): void
    {
        $folders = Folder::factory()->count(2)->create();
        $response = $this->get('/api/folders')
            ->assertStatus(200)
            ->assertJson($folders->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'created_at', 'updated_at'],
            ]);
    }

    /** @test */
    public function folders_are_created_correctly(): void
    {
        $payload = [
            'name' => $this->faker->name(),
        ];
        $this->assertEmpty(Folder::count());
        $this->post('/api/folders', $payload)
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => $payload['name'],]);
        $this->assertNotEmpty(Folder::count());
    }

    /** @test */
    public function folders_are_updated_correctly(): void
    {
        $folder = Folder::factory()->create();
        $payload = [
            'name' => $this->faker->name(),
        ];
        $this->put('/api/folders/' . $folder->id, $payload)
            ->assertStatus(200)
            ->assertJson(['id' => 1, 'name' => $payload['name']]);
    }

    /** @test */
    public function folders_are_deleted_correctly(): void
    {
        $folder = Folder::factory()->create();
        $this->delete('/api/folders/' . $folder->id)
            ->assertStatus(204);
    }
}
