<div x-data="{ grid: @entangle('grid') }" x-init="$watch('grid', () => initializeTippy())">
    <header class="p-5 pb-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5">
        <div class="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="text-2xl font-bold">
                {{ $courses->count() }} <span class="text-gray-400">Courses in total</span>
            </div>
            <ol class="flex justify-between md:justify-end items-center h-full space-x-7">
                <ol class="flex items-center h-full space-x-7">
                    <li>
                        <button
                            class="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                            <i class="text-lg mdi mdi-check-circle-outline mr-1"></i>
                            All status
                        </button>
                    </li>
                    <li>
                        <button
                            class="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                            <i class="text-lg mdi mdi-filter-variant mr-1"></i>
                            Filter
                        </button>
                    </li>
                    <li>
                        <button
                            class="text-gray-400 hover:opacity-50 transition text-sm flex items-center whitespace-nowrap">
                            <i class="text-lg mdi mdi-sort-variant mr-1"></i>
                            Sort
                        </button>
                    </li>
                </ol>
                <li>
                    <x-grid-toggle wire:model="grid"/>
                </li>
            </ol>
        </div>
        <div class="">
            <a href="{{ route('create-course') }}" class="w-full btn-primary md:w-48">
                + New Course
            </a>
        </div>
    </header>

    @if($grid)
        <ul
            :class="$store.sideNav.open ? 'xl:grid-cols-3':'lg:grid-cols-3 xl:grid-cols-4'"
            class="grid grid-cols-1 sm:grid-cols-2 p-5 gap-7"
        >
            @forelse($courses as $course)
                <li>
                    <x-course-card :course="$course"/>
                </li>
            @empty
                <li>
                    No courses yet
                </li>
            @endforelse
        </ul>
    @else
        <div class="overflow-x-auto">
            <table class="table-auto w-full text-left border-b">
                <thead class="border-b text-gray-400 text-xs whitespace-nowrap">
                <tr>
                    <th class="pl-4 md:pl-5 py-3">
                        Course Name
                    </th>
                    <th class="px-5">
                        Total Learners
                    </th>
                    <th class="px-5">
                        Category
                    </th>
                    <th class="px-5">
                        Completion Rate
                    </th>
                    <th class="px-5">
                        Reaction Score
                    </th>
                    <th class="pr-4 md:pr-5">
                    </th>
                </tr>
                </thead>
                <tbody class="divide-y">
                @forelse($courses as $course)
                    <tr>
                        <td class="pl-4 md:pl-5 py-5">
                            <div class="flex items-center space-x-5">
                                <a href="{{ route('course-detail', ['id' => $course->id]) }}">
                                    <figure class="w-32 aspect-[7/4] bg-gray-300 text-gray-100 grid place-content-center">
                                        <i class="mdi mdi-image text-4xl"></i>
                                    </figure>
                                </a>
                                <div class="space-y-1">
                                    <a href="{{ route('course-detail', ['id' => $course->id]) }}" class="hover:underline">
                                        <p class="font-semibold line-clamp-2 text-sm">
                                            {{ $course->name }}
                                        </p>
                                    </a>
                                    <x-published-state :published="$course->published"/>
                                </div>
                            </div>
                        </td>
                        <td class="px-5">
                            <div class="flex items-center space-x-1 text-sm whitespace-nowrap">
                                <i class="mdi mdi-account-circle-outline"></i>
                                <span>24 Learners</span>
                            </div>
                        </td>
                        <td class="px-5">
                            <div class="flex items-center space-x-1 text-sm">
                                <i class="mdi mdi-license"></i>
                                <span>Design</span>
                            </div>
                        </td>
                        <td class="px-5">
                            <div class="flex items-center space-x-1 text-sm">
                                <i class="mdi mdi-check-circle-outline"></i>
                                <p>65%</p>
                            </div>
                        </td>
                        <td class="px-5">
                            <div class="flex items-center space-x-1 text-sm whitespace-nowrap">
                                <i class="mdi mdi-emoticon-outline"></i>
                                <p>50% Useful</p>
                            </div>
                        </td>
                        <td class="pr-4 md:pr-5">
                            <div class="flex justify-end items-center space-x-5">
                                <button class="btn-primary-outline !px-10 text-sm">
                                    <i class="mdi mdi-plus"></i>
                                    Assign
                                </button>
                                <button
                                    data-template="course_menu_template"
                                    class="w-5 h-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                                    type="button"
                                >
                                    <i class="mdi mdi-dots-vertical text-2xl"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6">
                            <p>No courses yet</p>
                        </td>
                    </tr>
                @endforelse
                </tbody>
            </table>
        </div>
    @endif

    <template id="course_menu_template">
        <ul class="w-44 py-1">
{{--            <li class="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">--}}
{{--                <i class="mdi mdi-lock-outline mr-1 text-lg"></i>--}}
{{--                Lock Course--}}
{{--            </li>--}}
            <li class="hover:bg-gray-100 hover:text-gray-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                <i class="mdi mdi-pencil-outline mr-1 text-lg opacity-50"></i>
                Edit Course
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
</div>
