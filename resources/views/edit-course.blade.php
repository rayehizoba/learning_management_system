<x-layout>
    <x-slot:aside>
        <div class="flex flex-col divide-y divide-white/50 overflow-y-auto flex-1">
            <livewire:edit-course-sections :course_id="$course_id ?? null"/>

            <div class="space-y-3 sticky bottom-0 backdrop-blur p-5 pt-3">
                <a href="#" class="group px-2 block">
                    <div class="text-gray-400 text-xs">Powered by</div>
                    <div class="font-bold text-xl text-red-900 group-hover:text-red-700 transition">Razorlab</div>
                </a>
            </div>
        </div>
    </x-slot>

    <livewire:edit-course-section :course_id="$course_id ?? null"/>
</x-layout>
