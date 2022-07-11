<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\Section;
use Livewire\Component;
use Session;

class EditCourseSection extends Component
{
    public Course $course;
    public Section|null $section;
    public int $sectionIndex;

    public string $name = '';

    protected array $rules = [
        'course.*' => '',
        'course.name' => 'required',
        'course.description' => '',
//        'section.name' => 'required',
    ];

    public function mount(int $course_id = null)
    {
        if (isset($course_id)) {
            $this->course = Course::all()->find($course_id);
        } else {
            $this->course = new Course;
//            $this->course = Course::firstOrCreate(
//                ['new' => true],
//                ['name' => '']
//            );
        }
    }

//    public function updatingSection($value, $name)
//    {
//        $this->emitTo(
//            EditCourseSections::getName(), 'refreshSection',
//            $this->sectionIndex, json_encode([...$this->section->toArray(), $name => $value])
//        );
//    }

    public function render()
    {
        return view('livewire.edit-course-section');
    }

//    protected $listeners = [
//        'setSection' => 'setSection',
//        'setSectionIndex' => 'setSectionIndex',
//    ];

    public function setSection($value)
    {
        $this->section = isset($value) ? Section::make(json_decode($value, true)) : $value;
    }

    public function setSectionIndex(int $index)
    {
        $this->sectionIndex = $index;
    }

    public function save()
    {
        $this->validate();
        $this->course->save();
        foreach (Session::pull('course.sections', []) as $section) {
            Section::create([...$section, 'course_id' => $this->course->id]);
        }
    }
}
