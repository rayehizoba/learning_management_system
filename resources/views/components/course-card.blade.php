@props(['course'])

<div class="border rounded divide-y">
    <header>
        <div class="p-3 flex items-center justify-between">
            <x-published-state :published="$course->published"/>
            <button
                data-template="course_menu_template"
                class="h-5 w-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                type="button"
            >
                <i class="mdi mdi-dots-horizontal text-2xl"></i>
            </button>
        </div>
        <a href="{{ route('course-detail', ['id' => $course->id]) }}" class="group">
            <figure class="w-full aspect-[3/1] bg-gray-300 text-gray-100 grid place-content-center">
                <i class="mdi mdi-image text-5xl"></i>
            </figure>
            <div class="p-3">
                <p class="font-semibold line-clamp-1 group-hover:underline">
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
        </a>
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
