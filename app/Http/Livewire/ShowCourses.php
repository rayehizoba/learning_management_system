<?php

namespace App\Http\Livewire;

use App\Models\LearningPath;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class ShowCourses extends Component
{
    public Collection $courses;

    public bool $grid = true;

    public function render()
    {
        $this->courses = LearningPath::all();
        return view('livewire.show-courses');
    }
}
