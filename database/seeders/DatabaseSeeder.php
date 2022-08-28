<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CountrySeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(QuizSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(GroupSeeder::class);
        $this->call(FileSeeder::class);
        $this->call(FolderSeeder::class);
        $this->call(LearningPathSeeder::class);
        $this->call(UserSeeder::class);
    }
}
