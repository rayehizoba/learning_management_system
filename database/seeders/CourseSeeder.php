<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        Course::factory()
            ->has(
                Section::factory()
                ->count($faker->unique(true)->numberBetween(1, 10))
            )
            ->count(10)
            ->create();
    }
}
