<?php

namespace Tests\Feature;

use App\Http\Livewire\EditCourseSection;
use App\Http\Livewire\EditCourseSections;
use App\Models\Course;
use App\Models\Section;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Livewire\Livewire;
use Tests\TestCase;

class EditCourseTest extends TestCase
{
    use RefreshDatabase, WithFaker;

//    /** @test */
    public function can_create_course(): void
    {
        $course = new Course(['name' => $this->faker->name()]);
        $section = ['name' => ''];

        Livewire::test(EditCourseSections::class)
            ->call('addSection')
            ->assertSee('Section - 1');

        $this->assertEquals([$section], \Session::get('course.sections'));

        Livewire::test(EditCourseSections::class)
            ->call('addSection')
            ->assertSee('Section - 2');

        $this->assertEquals([$section, $section], \Session::get('course.sections'));

        $test = Livewire::test(EditCourseSection::class)
            ->set('course', $course);

        $test->call('save');

        $this->assertTrue(Course::where('name', $course->name)->exists());
        $this->assertEquals(2, Section::count());
        $this->assertEmpty(\Session::get('course.sections'));
    }

//    /** @test  */
    public function name_category_and_focus_area_fields_are_required_for_saving_a_course()
    {
        $course = new Course(['name' => '']);
        Livewire::test(EditCourseSection::class)
            ->set('course', $course)
            ->call('save')
            ->assertHasErrors([
                'course.name' => 'required',
            ]);
    }
}
