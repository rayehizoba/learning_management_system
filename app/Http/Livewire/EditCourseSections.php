<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\Section;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class EditCourseSections extends Component
{
    public Collection $sections;
    public Section $section;

    public function mount(int $course_id = null)
    {
        if (isset($course_id)) {
            $course = Course::all()->find($course_id);
            $this->sections = Collection::make($course->sections);
            $this->section = $this->sections->first();
        } else {
            $this->sections = Collection::make();
        }
    }

    public function render()
    {
        return view('livewire.edit-course-sections');
    }

    public function addSection()
    {
        $this->sections->add($section = Section::make());
        $this->section = $section;
    }

    public function setSectionIndex(int $index)
    {
        $this->section = $this->sections[$index];
    }
}
