<?php

namespace App\Http\Livewire;

use App\Models\LearningPath;
use App\Models\Section;
use Livewire\Component;

class CourseContent extends Component
{
    public LearningPath $course;
    public Section $section;

    public function mount(LearningPath $course)
    {
        $this->course = $course;

        if ($course->sections()->count() > 0) {
            $this->section = $course->sections[0];
        }
    }

    public function setSectionIndex(int $index)
    {
        $this->section = $this->course->sections[$index];
    }

    public function render()
    {
        return view('livewire.course-content');
    }
}
