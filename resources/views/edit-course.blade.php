<x-layout>
    <x-slot:aside>
        <div class="flex flex-col space-y-5 divide-y divide-white/50 overflow-y-auto flex-1">
            <header class="flex items-center space-x-2 relative group mt-10 px-3">
                <a href="{{ route('courses') }}" class="absolute inset-0"></a>
                <div
                    class="block border border-teal-500 rounded-full w-8 h-8 md:w-6 md:h-6 grid place-content-center group-hover:bg-teal-500 group-hover:text-white transition">
                    <i class="mdi mdi-chevron-left text-2xl"></i>
                </div>
                <div class="font-medium">
                    Back to Course List
                </div>
            </header>

            <livewire:edit-course-sections :course_id="$course_id ?? null"/>

            <div class="space-y-3 sticky bottom-0 backdrop-blur p-5 pt-3">
                <a href="#" class="group px-2 block">
                    <div class="text-gray-400 text-xs">Powered by</div>
                    <div class="font-bold text-xl text-red-900 group-hover:text-red-700 transition">Razortech</div>
                </a>
            </div>
        </div>
    </x-slot>

    <livewire:edit-course-section/>
</x-layout>
