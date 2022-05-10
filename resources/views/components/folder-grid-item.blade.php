@props(['folder'])

<div
    x-data="{ active: false }"
    @click="active = true"
    @click.away="active = false"
    :class="{ 'bg-teal-50': active }"
    class="cursor-pointer w-full aspect-square border rounded-md p-3 relative transition select-none"
    {{ $attributes }}
>
    <div class="absolute inset-x-3 top-2 flex items-center justify-between">
        <label
            for="{{ $folder->id }}"
            class="cursor-pointer relative w-5 h-5 flex items-center justify-center"
        >
            <input id="{{ $folder->id }}" type="checkbox" class="peer sr-only"/>
            <i class="z-10 mdi mdi-check text-transparent peer-checked:text-white transition text-xl scale-50 peer-checked:scale-100"></i>
            <span
                class="bg-white absolute inset-0 rounded-sm border peer-checked:bg-teal-500 peer-checked:border-teal-500 transition"></span>
        </label>
        <button>
            <i class="mdi mdi-dots-horizontal text-gray-400 text-2xl"></i>
        </button>
    </div>
    <div class="flex flex-col justify-center w-full h-full">
        <i class="mdi mdi-folder text-red-700 text-5xl xl:text-6xl mt-5"></i>
        <div class="text-gray-800 text-sm">
            {{ $folder->name }}
        </div>
        <small class="text-gray-400 text-xs">
            3 Files, {{ $folder->children()->count() }} Folders
        </small>
    </div>
</div>
