@props(['course'])

<template id="course-settings{{ $attributes->has('key') ? '-'.$attributes->get('key'):'' }}" hidden>
    <ul class="w-44 py-1">
        <li class="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
            <i class="mdi mdi-lock-outline mr-1 text-lg opacity-50"></i>
            Lock Course
            <label class="w-10 aspect-[2/1] relative ml-auto rounded-full">
                <input type="checkbox" class="sr-only peer">
                <span
                    class="absolute inset-0 rounded-full bg-gray-100 peer-checked:bg-teal-100 transition border peer-checked:border-teal-500"></span>
                <span
                    class="w-1/2 aspect-[1/1] rounded-full shadow bg-white transform scale-75 transition-all left-0 absolute peer-checked:left-1/2 peer-checked:bg-teal-500"></span>
            </label>
        </li>
        <li>
            <a
                href="{{ route('edit-course', ['course_id' => $course->id]) }}"
                class="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
            >
                <i class="mdi mdi-pencil-outline mr-1 text-lg opacity-50"></i>
                Edit Course
            </a>
        </li>
        <li class="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
            <i class="mdi mdi-history mr-1 text-lg opacity-50"></i>
            Edit History
        </li>
        <li class="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
            <i class="mdi mdi-export-variant mr-1 text-lg opacity-50"></i>
            Export Course
        </li>
        <li class="hover:bg-red-100 text-red-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
            <i class="mdi mdi-trash-can-outline mr-1 text-lg opacity-50"></i>
            Delete Course
        </li>
    </ul>
</template>
