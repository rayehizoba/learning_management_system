<section>
    <section class="p-4 md:p-5 space-y-5">
        <!-- Cover Image -->
        <header
            class="group aspect-[5/2] rounded-lg bg-gray-200 w-full relative overflow-hidden grid place-content-center">
            <i class="mdi mdi-image text-9xl text-gray-100"></i>
            <div
                class="md:pointer-events-none group-hover:pointer-events-auto md:opacity-0 group-hover:opacity-100 transition absolute inset-0 top-1/2 md:top-0 bg-gradient-to-b from-transparent to-black/10 md:to-black/25 grid place-content-end">
                <input type="file" x-ref="cover" accept="image/*" class="hidden"/>
                <button
                    @click="$refs.cover.click()"
                    class="btn-outline m-3 md:m-5 font-semibold flex items-center space-x-1"
                >
                    <i class="mdi mdi-camera-outline text-lg"></i>
                    <span>Update Cover</span>
                </button>
            </div>
        </header>

        <div
            class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-5">
            <p class="text-xl md:text-2xl lg:text-3xl font-bold">
                {{ $course->name }}
            </p>
            <ul class="flex items-center space-x-3 md:space-x-4">
                <a
                    href="{{ route('edit-course', ['course_id' => $course->id]) }}"
                    class="btn-outline font-semibold flex items-center space-x-1"
                >
                    <i class="mdi mdi-pencil-outline text-lg"></i>
                    <span>Edit Course</span>
                </a>
                <button class="btn-outline font-semibold flex items-center space-x-1">
                    <i class="mdi mdi-eye-outline text-lg"></i>
                    <span>Preview as Learner</span>
                </button>
                <button
                    data-menu-template="course-settings"
                    class="btn-outline w-12 aspect-square font-semibold grid place-content-center"
                >
                    <i class="mdi mdi-cog-outline text-lg"></i>
                </button>
                <x-menu-template.course-settings :course="$course"/>
            </ul>
        </div>

        <ul class="flex flex-wrap items-center space-x-3 text-gray-400">
            <li>
                <x-published-state :published="$course->published"/>
            </li>
            <li>
                <div class="flex items-center space-x-1 text-gray-400">
                    <i class="mdi mdi-license"></i>
                    <span class="text-xs">Design</span>
                </div>
            </li>
            <li>&bull;</li>
            <li>
                <div class="flex items-center space-x-1 text-gray-400">
                    <i class="mdi mdi-calendar-month-outline"></i>
                    <span class="text-xs">Created: March 7 2022 {{ $course->created_at }}</span>
                </div>
            </li>
            <li>&bull;</li>
            <div class="flex items-center space-x-1 text-gray-400">
                <i class="mdi mdi-eye-outline"></i>
                <span class="text-xs">Public</span>
            </div>
            <li>&bull;</li>
            <div class="flex items-center space-x-1 text-gray-400">
                <i class="mdi mdi-file-document-outline"></i>
                <span class="text-xs">Course</span>
            </div>
        </ul>
    </section>

    <!-- Tab Nav -->
    <ul class="border-b px-4 md:px-5 flex space-x-8 font-bold text-gray-400 select-none">
        @foreach($tabs as $each)
            <li
                wire:click="setTab('{{ $each }}')"
                class="{{ $tab == $each ? 'border-yellow-400 text-black':'border-transparent' }} py-3 hover:text-black transition-all duration-300 cursor-pointer border-b-2"
            >
                {{ $each }}
            </li>
        @endforeach
    </ul>

    <!-- Content Section -->
    @if($tab == \App\Http\Livewire\ShowCourseDetail::CONTENT)
        <livewire:course-content :course="$course"/>
    @endif

    <!-- Statistic Section -->
    @if($tab == \App\Http\Livewire\ShowCourseDetail::STATISTICS)
        <section class="">
            <p class="text-lg font-bold p-5 pb-0">
                Overall Course Stat
            </p>
            <div class="grid md:grid-cols-2 gap-8 md:gap-16 p-5 w-fit">
                <div class="flex items-center space-x-5">
                    <div class="aspect-[1/1] w-14 rounded-full bg-teal-200 text-teal-600 grid place-content-center">
                        <i class="mdi mdi-check-decagram text-3xl"></i>
                    </div>
                    <div class="font-semibold">
                        <p class="text-gray-400 text-sm">
                            Average Completion Rate
                        </p>
                        <p class="text-lg">
                            100%
                        </p>
                    </div>
                </div>
                <div class="flex items-center space-x-5">
                    <div
                        class="aspect-[1/1] w-14 rounded-full bg-yellow-200 text-yellow-600 grid place-content-center">
                        <i class="mdi mdi-emoticon text-3xl"></i>
                    </div>
                    <div class="font-semibold">
                        <p class="text-gray-400 text-sm">
                            Average Learner Reaction
                        </p>
                        <p class="text-lg">
                            75% Useful
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-5">
                <div class="aspect-[4/1] w-full bg-teal-50 grid place-content-center text-teal-400">
                    line chart area
                </div>
            </div>

            <p class="text-lg font-bold p-5 pb-0">
                Course Section Stat
            </p>
            <div class="overflow-x-auto">
                <table class="table-auto w-full text-left border-b text-sm md:text-base">
                    <thead class="border-b text-gray-400 whitespace-nowrap">
                    <tr>
                        <th class="pl-5 py-3 font-normal min-w-[20ch]">
                            Section Name
                        </th>
                        <th class="px-5 font-normal min-w-[18ch]">
                            Last Updated
                        </th>
                        <th class="px-5 font-normal">
                            Completion Rate
                        </th>
                        <th class="px-5 font-normal">
                            Total Learners Completed
                        </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y">
                    <template hidden x-for="i in 3" :key="i">
                        <tr>
                            <td class="pl-5 py-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
                            </td>
                            <td class="px-5">
                                <p>Last Updated: March 17, 2022</p>
                            </td>
                            <td class="px-5">
                                <p>100%</p>
                            </td>
                            <td class="px-5">
                                <p>87 Learner</p>
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </section>
    @endif

    <!-- Learner Section -->
    @if($tab == \App\Http\Livewire\ShowCourseDetail::LEARNERS)
        <section>
            <div class="bg-gray-100 border-b p-5 py-3">
                <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-3 space-y-3 lg:space-y-0 ">
                    <div class="relative">
                        <label for="search" class="absolute left-0 inset-y-0 grid place-content-center w-10">
                            <i class="mdi mdi-magnify text-2xl text-gray-400"></i>
                        </label>
                        <input
                            id="search"
                            type="text"
                            class="p-2 pl-10 border focus:border-teal-600 outline-none transition rounded-md w-full md:w-1/2 lg:w-72 xl:w-96"
                            placeholder="Email, Name"
                        >
                    </div>
                    <ol class="flex flex-wrap md:flex-nowrap items-center w-full space-x-3">
                        <li>
                            <button class="btn-outline !py-1.5 flex items-center whitespace-nowrap">
                                <i class="text-lg mdi mdi-filter-variant mr-1"></i>
                                Filter
                            </button>
                        </li>
                        <li>
                            <button class="btn-outline !py-1.5 flex items-center whitespace-nowrap">
                                <i class="text-lg mdi mdi-sort-variant mr-1"></i>
                                Sort
                            </button>
                        </li>
                        <li class="!ml-auto">
                            <div x-data="{ list: true }"
                                 class="rounded-md border-2 border-gray-200 bg-gray-200 relative">
                                <div class="flex relative z-10">
                                    <button @click="list = true"
                                            class="w-9 aspect-square flex items-center justify-center">
                                        <i class="mdi mdi-format-list-bulleted text-2xl"></i>
                                    </button>
                                    <button @click="list = false"
                                            class="w-9 aspect-square flex items-center justify-center">
                                        <i class="mdi mdi-view-grid-outline text-2xl"></i>
                                    </button>
                                </div>
                                <div :class="list?'':'translate-x-full'"
                                     class="absolute inset-0 w-1/2 aspect-square bg-white rounded transform transition"></div>
                            </div>
                        </li>
                        <li class="!ml-0 md:!ml-3 w-full md:w-auto mt-3 md:mt-0">
                            <button class="btn-primary !px-8 w-full">
                                + <span class="pl-1 font-semibold py-0.5">Assign Learner</span>
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="table-auto w-full text-left border-b text-sm md:text-base">
                    <thead class="border-b text-gray-400 whitespace-nowrap">
                    <tr>
                        <th class="pl-5 py-3 font-normal">
                            <div class="flex items-center space-x-3">
                                <label class="text-2xl text-teal-500">
                                    <input type="checkbox" class="peer sr-only"/>
                                    <i class="mdi mdi-checkbox-marked hidden peer-checked:block"></i>
                                    <i class="mdi mdi-checkbox-blank-outline peer-checked:hidden"></i>
                                </label>
                                <p>Learner Name</p>
                            </div>
                        </th>
                        <th class="px-5 font-normal">
                            Date Assigned
                        </th>
                        <th class="px-5 font-normal">
                            Status
                        </th>
                        <th class="px-5 font-normal">
                            Reaction Score
                        </th>
                        <th class="px-5 font-normal">
                        </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y">
                    <template hidden x-for="i in 7" :key="i">
                        <tr>
                            <td class="pl-5 py-5">
                                <div class="flex items-center space-x-3">
                                    <label class="text-2xl text-teal-500">
                                        <input type="checkbox" class="peer sr-only"/>
                                        <i class="mdi mdi-checkbox-marked hidden peer-checked:block"></i>
                                        <i class="mdi mdi-checkbox-blank-outline peer-checked:hidden"></i>
                                    </label>
                                    <div class="aspect-[1/1] w-10 bg-gray-200 rounded-full"></div>
                                    <p class="whitespace-nowrap">Jerry Paula</p>
                                </div>
                            </td>
                            <td class="px-5">
                                <p>Dec 29, 2022</p>
                            </td>
                            <td class="px-5 lg:max-w-[16ch] xl:max-w-[12ch]">
                                <div class="space-y-2">
                                    <div class="flex justify-between items-center space-x-5">
                                        <p class="text-xs text-gray-400 font-semibold">Completed</p>
                                        <p class="text-sm font-medium">100%</p>
                                    </div>
                                    <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div class="bg-teal-500 h-full rounded-full" style="width: 90%"></div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5">
                                <p>100% Useful</p>
                            </td>
                            <td class="px-5">
                                <button
                                    class="ml-auto w-5 h-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                                    <i class="mdi mdi-dots-vertical text-2xl"></i>
                                </button>
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </section>
    @endif

</section>
