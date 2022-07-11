<x-layout title="Course Detail">
    <x-slot:subtitle>
        <ul class="flex space-x-1 text-xs">
            <li>Content</li>
            <li>/</li>
            <li>
                <a
                    href="{{ route('courses') }}"
                    class="hover:underline"
                >Courses</a>
            </li>
            <li>/</li>
            <li>
                <a
                    href="{{ route('course-detail', ['course_id' => $course_id]) }}"
                    class="text-gray-400 hover:underline"
                >Course Details</a>
            </li>
        </ul>
    </x-slot>

    <livewire:show-course-detail :course_id="$course_id"/>
</x-layout>
