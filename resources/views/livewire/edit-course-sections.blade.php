<ul class="flex-1 divide-y divide-white/50">
    <li class="border-l-4 border-l-gray-400 p-4 py-2 bg-red-100/30">
        <p class="">
            General Information
        </p>
        <p class="text-gray-400 text-xs">
            Updated: March 17, 2021 4:22pm
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
    @foreach($sections as $each)
        <li
            wire:click="setSectionIndex({{ $loop->index }})"
            class="@if(isset($section) && $section === $each) !border-l-yellow-500 @else hover:!border-l-yellow-400 @endif border-l-4 p-4 px-1 bg-blue-100/30 cursor-pointer"
        >
            <div class="flex items-center space-x-1">
                <i class="mdi mdi-drag-vertical text-gray-400 text-2xl cursor-grab"></i>
                <div>
                    <p class="">
                        {{ $each->name ?? 'Section - '.$loop->iteration }}
                    </p>
                    @isset($each->updated_at)
                        <p class="text-gray-400 text-xs">
                            Updated: March 17, 2021 4:22pm
                        </p>
                    @endisset
                </div>
            </div>
        </li>
    @endforeach
</ul>
