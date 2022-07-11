<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\Section;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class EditCourseSections extends Component
{
    public Collection $sections;
    public Section|null $section;
    public Course $course;

    public function mount(int $course_id = null)
    {
        if (isset($course_id)) {
            $this->course = Course::all()->find($course_id);
            $this->sections = Collection::make($this->course->sections);
        } else {
            $this->course = Course::firstOrCreate(
                ['new' => true],
                ['name' => '']
            );
            $this->sections = Collection::make();
        }
    }

//    protected $listeners = [
//        'refreshSection' => 'refreshSection',
//    ];

    public function render()
    {
        return view('livewire.edit-course-sections');
    }

    public function addSection()
    {
        \Session::push('course.sections', ['name' => '']);
//        $this->sections->add(Section::make());
//        $this->setSectionIndex($this->sections->count() - 1);
    }

    public function setSectionIndex(int $index)
    {
        if ($index < 0) {
            $this->setSection(null);
        } else {
            $this->setSection($this->sections[$index]);
        }
        $this->emitTo(EditCourseSection::getName(), 'setSectionIndex', $index);
    }

    public function setSection(Section|null $value)
    {
        $this->section = $value;
        $this->emitTo(
            EditCourseSection::getName(), 'setSection',
            $value instanceof Section ? $value->toJson() : $value
        );
    }

    public function refreshSection(int $index, $json)
    {
        $this->section = Section::make(json_decode($json, true));
        $this->sections[$index] = $this->section;
    }
}
