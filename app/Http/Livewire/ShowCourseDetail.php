<?php

namespace App\Http\Livewire;

use App\Models\Course;
use Livewire\Component;

class ShowCourseDetail extends Component
{
    const CONTENT = 'Content';
    const STATISTICS = 'Statistics';
    const LEARNERS = 'Learners';

    public array $tabs = [self::CONTENT, self::STATISTICS, self::LEARNERS];
    public $tab = self::CONTENT;

    public Course $course;

    public function mount($course_id)
    {
        $this->course = Course::all()->find($course_id);
    }

    public function render()
    {
        return view('livewire.show-course-detail');
    }

    public function setTab($tab)
    {
        $this->tab = $tab;
    }
}
