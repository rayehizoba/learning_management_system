<div class="divide-y divide-white/50 flex-1">
    <header class="sticky top-0 backdrop-blur divide-y divide-white/50">
        <div class="flex items-center space-x-2 relative group px-3 pb-5 pt-10">
            <a href="{{ route('courses') }}" class="absolute inset-0"></a>
            <div
                class="block border border-teal-500 rounded-full w-8 h-8 md:w-6 md:h-6 grid place-content-center group-hover:bg-teal-500 group-hover:text-white transition">
                <i class="mdi mdi-chevron-left text-2xl"></i>
            </div>
            <div class="font-medium">
                Back to Course List
            </div>
        </div>

        <ul class="flex-1 divide-y divide-white/50">
            <li
                wire:click="setSectionIndex(-1)"
                class="@if(!isset($section)) !border-l-yellow-400 bg-blue-100/50 @else !border-l-gray-400 hover:bg-gray-100/50 @endif border-l-4 p-4 cursor-pointer transition-all"
            >
                <p class="">
                    General Information
                </p>
                <p class="text-gray-400 text-xs">
                    Updated: {{ date('F d, Y h:i A', strtotime($course->updated_at)) }}
                </p>
            </li>
            <li class="p-5 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-5 font-bold">
                        <p class="">
                            Sections
                        </p>
                        <p class="text-gray-400">
                            {{ count($sections) }}
                        </p>
                    </div>
                    <button
                        wire:click="addSection()"
                        type="button"
                        class="btn-primary h-9 w-9 !text-xl"
                    >
                        <i class="mdi mdi-plus"></i>
                    </button>
                </div>
            </li>
        </ul>

    </header>

    <ul class="flex-1 divide-y divide-white/50">
        @foreach($sections as $each)
            <li
                wire:click="setSectionIndex({{ $loop->index }})"
                class="@if(isset($section) && $section === $each) !border-l-yellow-400 bg-blue-100/50 @else !border-l-gray-400 hover:bg-gray-100/50 @endif border-l-4 p-4 px-1 cursor-pointer transition-all"
            >
                <div class="flex items-center space-x-1">
                    <i class="mdi mdi-drag-vertical text-gray-400 text-2xl cursor-grab"></i>
                    <div>
                        <p class="">
                            {{ $each->name ?? 'Section - '.$loop->iteration }}
                        </p>
                        @isset($each->updated_at)
                            <p class="text-gray-400 text-xs">
                                Updated: March 17, 2021 4:22pm | {{ date('M Y', strtotime($each->updated_at)) }}
                            </p>
                        @endisset
                    </div>
                </div>
            </li>
        @endforeach
        @foreach(\Session::get('course.sections', []) as $each)
            <li
                class="border-l-4 p-4 px-1 cursor-pointer transition-all"
            >
                <div class="flex items-center space-x-1">
                    <i class="mdi mdi-drag-vertical text-gray-400 text-2xl cursor-grab"></i>
                    <div>
                        <p class="">
                            {{ $each->name ?? 'Section - '.$loop->iteration }}
                        </p>
                        @isset($each->updated_at)
                            <p class="text-gray-400 text-xs">
                                Updated: March 17, 2021 4:22pm | {{ date('M Y', strtotime($each->updated_at)) }}
                            </p>
                        @endisset
                    </div>
                </div>
            </li>
        @endforeach
    </ul>
</div>
