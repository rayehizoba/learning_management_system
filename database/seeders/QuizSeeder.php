<?php

namespace Database\Seeders;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        Quiz::factory()
            ->has(
                Question::factory()
                    ->count($faker->unique(true)->numberBetween(1, 10))
            )
            ->count(10)
            ->create();
    }
}
