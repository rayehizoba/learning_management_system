<div>
    <header class="{{ $grid ? '':'pb-2' }} p-5 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5">
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
                    <div class="border rounded divide-y">
                        <header>
                            <div class="p-3 flex items-center justify-between">
                                <x-published-state :published="$course->published"/>
                                <button
                                    class="h-5 w-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                                    <i class="mdi mdi-dots-horizontal text-2xl"></i>
                                </button>
                            </div>
                            <figure class="w-full aspect-[3/1] bg-gray-300 text-gray-100 grid place-content-center">
                                <i class="mdi mdi-image text-5xl"></i>
                            </figure>
                            <div class="p-3">
                                <p class="font-semibold line-clamp-1">
                                    {{ $course->name }}
                                </p>
                                <div class="flex items-center space-x-5">
                                    <div class="flex items-center space-x-1 text-gray-400">
                                        <i class="mdi mdi-account-circle-outline"></i>
                                        <span class="text-xs">24 Learners</span>
                                    </div>
                                    <div class="flex items-center space-x-1 text-gray-400">
                                        <i class="mdi mdi-license"></i>
                                        <span class="text-xs">Design</span>
                                    </div>
                                </div>
                            </div>
                        </header>

                        @if($course->published)
                            <div class="divide-x flex h-16">
                                <div class="w-1/2 flex items-center">
                                    <div class="p-3 space-y-1">
                                        <p class="text-gray-400 text-xs">
                                            Completion rate
                                        </p>
                                        <div class="flex items-center space-x-1 text-sm">
                                            <i class="mdi mdi-check-circle-outline"></i>
                                            <p>65%</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-1/2 flex items-center">
                                    <div class="p-3 space-y-1">
                                        <p class="text-gray-400 text-xs">
                                            Learner reaction
                                        </p>
                                        <div class="flex items-center space-x-1 text-sm">
                                            <i class="mdi mdi-emoticon-outline"></i>
                                            <p>50% Useful</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="flex items-center justify-center h-16 text-gray-400 space-x-2">
                                <i class="mdi mdi-finance"></i>
                                <p class="text-sm">This course has no stats yet</p>
                            </div>
                        @endif

                        <footer class="p-4">
                            <button class="btn-primary-outline w-full">
                                <i class="mdi mdi-plus"></i>
                                Assign
                            </button>
                        </footer>
                    </div>
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
                                <div>
                                    <figure class="w-32 aspect-[7/4] bg-gray-300 text-gray-100 grid place-content-center">
                                        <i class="mdi mdi-image text-4xl"></i>
                                    </figure>
                                </div>
                                <div class="space-y-1">
                                    <p class="font-semibold line-clamp-2 text-sm">
                                        {{ $course->name }}
                                    </p>
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
                                    class="w-5 h-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white">
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
</div>
