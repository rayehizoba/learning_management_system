@php
    $ancestors = collect();
    $currentFolder = $selectedFolder;

    if (isset($selectedFolder)) {
        do {
            $ancestors->prepend($currentFolder);
        } while ($currentFolder = $currentFolder->parent);
    }
@endphp

<div class="flex flex-col min-h-full">
    <header class="p-5 border-b flex items-center space-x-5">
        <div class="w-10/12 flex items-center justify-between">
            <div class="text-2xl font-bold">
                <span class="whitespace-nowrap">0 <span class="text-gray-400">Files,</span></span>&nbsp;
                <span class="whitespace-nowrap">{{ $allFolders->count() }} <span
                        class="text-gray-400">Folders</span></span>
            </div>
            <ul class="flex justify-end items-center h-full space-x-7">
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
                <li>
                    <div x-data="{ list: true }"
                         class="rounded-md border-2 border-gray-200 bg-gray-200 relative">
                        <div class="flex relative z-10">
                            <button
                                @click="list = true"
                                class="w-9 aspect-square flex items-center justify-center">
                                <i class="mdi mdi-format-list-bulleted text-2xl"></i>
                            </button>
                            <button
                                @click="list = false"
                                class="w-9 aspect-square flex items-center justify-center">
                                <i class="mdi mdi-view-grid-outline text-2xl"></i>
                            </button>
                        </div>
                        <div
                            :class="list?'':'translate-x-full'"
                            class="absolute inset-0 w-1/2 aspect-square bg-white rounded transform transition"
                        ></div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="w-2/12">
            <div x-data="{ open: false }" class="w-full relative">
                <button @click="open = !open" class="w-full btn-primary">
                    + Add New
                </button>
                <ul
                    x-show="open" x-transition.scale.origin.top
                    @click.outside="open = false"
                    class="mt-2 absolute z-10 w-full top-full bg-white border rounded-md shadow-md divide-y text-sm"
                >
                    <li class="p-2 px-3 flex items-center hover:bg-gray-100 transition cursor-pointer">
                        <i class="text-gray-400 mdi mdi-upload text-lg mr-2"></i>
                        File
                    </li>
                    <li
                        wire:click="$emit('openModal', 'edit-folder',
                            {{ json_encode(["parentId" => isset($selectedFolder) ? $selectedFolder->id : null]) }})"
                        class="p-2 px-3 flex items-center hover:bg-gray-100 transition cursor-pointer"
                    >
                        <i class="text-gray-400 mdi mdi-folder-plus-outline text-lg mr-2"></i>
                        Folder
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <section class="flex divide-x flex-1">
        <aside class="w-80 flex overflow-auto">
            <ul class="px-5 py-3 space-y-5 select-none">
                {{-- Folders Tree View --}}
                <li>
                    <h3 class="text-lg font-bold px-3 py-2">
                        Folders ({{ $allFolders->count() }})
                    </h3>
                    <ul>
                        @foreach($rootFolders as $folder)
                            <li>
                                <x-folder-tree-item
                                    :folder="$folder"
                                    :selectedFolder="$selectedFolder"
                                />
                            </li>
                        @endforeach
                    </ul>
                </li>
            </ul>
        </aside>

        <div class="p-5 px-7 flex-1 space-y-5">
            <nav>
                <ul class="flex items-center space-x-3 h-8 overflow-x-auto whitespace-nowrap">
                    <li>
                        <button
                            wire:click="resetFolder"
                            type="button"
                            class="text-gray-400 hover:underline"
                        >
                            Files & Folders
                        </button>
                    </li>
                    @foreach($ancestors as $folder)
                        <li>
                            <i class="mdi mdi-chevron-right text-2xl"></i>
                        </li>
                        <li>
                            <button
                                wire:click="selectFolder({{ $folder->id }})"
                                type="button"
                                class="text-gray-800 hover:underline"
                            >
                                {{ $folder->name }}
                            </button>
                        </li>
                    @endforeach
                </ul>
            </nav>
            @if((isset($selectedFolder) ? $selectedFolder->children() : $rootFolders)->count() > 0)
                <ul class="grid grid-cols-3 xl:grid-cols-4 gap-3">
                    @foreach((isset($selectedFolder) ? $selectedFolder->children : $rootFolders) as $folder)
                        <li>
                            <x-folder-grid-item
                                wire:dblclick="selectFolder({{ $folder->id }})"
                                :folder="$folder"
                            />
                        </li>
                    @endforeach
                </ul>
            @endif

            <h3 class="text-lg font-semibold text-gray-400">
                Files (3)
            </h3>

            <ul class="grid grid-cols-4 gap-3">
                <li>
                    <div class="w-full border rounded-md relative">
                        <div class="absolute inset-x-3 top-2 flex items-center justify-between">
                            <label for="cb1"
                                   class="cursor-pointer relative w-5 h-5 flex items-center justify-center">
                                <input id="cb1" type="checkbox" class="peer sr-only"/>
                                <i class="z-10 mdi mdi-check text-transparent peer-checked:text-white transition text-xl scale-50 peer-checked:scale-100"></i>
                                <span
                                    class="bg-white absolute inset-0 rounded-sm border peer-checked:bg-teal-500 peer-checked:border-teal-500 transition"></span>
                            </label>
                            <button>
                                <i class="mdi mdi-dots-horizontal text-gray-400 text-2xl drop-shadow-sm"></i>
                            </button>
                        </div>
                        <div class="aspect-square bg-gray-200">
                        </div>
                        <div class="px-2 py-1 h-16 leading-none">
                            <div class="flex items-center text-sm">
                                <i class="mdi mdi-video-outline text-teal-500 mr-1 text-xl"></i>
                                <span
                                    class="text-ellipsis overflow-hidden whitespace-nowrap">illustrator tutorial.</span>mp4
                            </div>
                            <small class="text-gray-400 text-xs font-medium">
                                57.1 Mb
                            </small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</div>
