<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\File>
 */
class FileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $name = $this->faker->name(),
            'ext' => $ext = $this->faker->fileExtension(),
            'path' => $name . '.' . $ext,
            'pinned' => rand(0, 1),
        ];
    }
}
