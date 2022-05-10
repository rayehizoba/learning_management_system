@props(['folder', 'selectedFolder', 'parent', 'last' => true, 'level' => 0])

<div x-data="{ open: false }" :class="{ 'border-l': open && @json(!$last) }">
    <div class="relative @isset($parent) pl-5 @endisset">
        <div
            wire:click="selectFolder({{ $folder->id }})"
            @dblclick="open = !open"
            class="flex items-center hover:bg-gray-100 transition p-1 rounded-md px-4 cursor-pointer whitespace-nowrap {{ $selectedFolder && $folder->id == $selectedFolder->id ? 'text-teal-500' : 'text-gray-400' }}"
        >
            <i
                :class="open ? 'mdi-folder-open-outline' : 'mdi-folder-outline'"
                class="mdi text-2xl mr-2"
            ></i>
            {{ $folder->name }}
        </div>
        @isset($parent)
            <div
                x-show="@json($last) || (@json(!$last) && !open)"
                class="border-l w-px absolute left-0 top-0 {{ $last ? 'h-1/2' : 'h-full' }}"
            ></div>
            <div class="absolute inset-0 pointer-events-none flex items-center">
                <div class="w-5 border-t relative">
                    <div
                        class="h-1.5 w-1.5 rounded-full bg-gray-300 absolute right-0 -mt-1"></div>
                </div>
            </div>
        @endisset
    </div>
    @if($folder->children()->count() > 0)
        <ul
{{--            :class="open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'"--}}
            x-show="open"
            class="transition-all {{ $level == 0 ? 'ml-7' : 'ml-12' }}"
        >
            @foreach($folder->children as $child)
                <li class="relative">
                    <x-folder-tree-item
                        :folder="$child"
                        :selectedFolder="$selectedFolder"
                        :parent="$folder"
                        :last="$loop->last"
                        :level="$level +1"
                    />
                </li>
            @endforeach
        </ul>
    @endif
</div>
