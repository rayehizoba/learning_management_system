@props(['folder'])

<div
    x-data="item"
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
        <button
            id="folderPopupTrigger{{ $folder->id }}"
            data-template="folderPopupTemplate{{ $folder->id }}"
            type="button"
        >
            <i class="mdi mdi-dots-horizontal text-gray-400 text-2xl"></i>
        </button>

        <template id="folderPopupTemplate{{ $folder->id }}">
            <ul class="w-44 py-1">
                <li class="hover:bg-gray-100 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                    <i class="mdi mdi-pencil-outline text-gray-400 mr-1 text-lg"></i>
                    Rename
                </li>
                <li
                    id="folderColorPopupTrigger{{ $folder->id }}"
                    data-template="folderColorPopupTemplate{{ $folder->id }}"
                    class="hover:bg-gray-100 p-0.5 px-1 cursor-pointer font-medium flex items-center"
                >
                    <i class="mdi mdi-palette-outline text-gray-400 mr-1 text-lg"></i>
                    Change Color
                    <i class="mdi mdi-chevron-right text-gray-400 text-lg ml-auto"></i>
                </li>
                <li class="hover:bg-gray-100 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                    <i class="mdi mdi-open-in-new text-gray-400 mr-1 text-lg"></i>
                    Move
                </li>
                <li class="hover:bg-gray-100 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                    <i class="mdi mdi-format-list-checkbox text-gray-400 mr-1 text-lg"></i>
                    View Details
                </li>
                <li class="hover:bg-gray-100 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                    <i class="mdi mdi-link-variant text-gray-400 mr-1 text-lg"></i>
                    Get Link
                </li>
                <li class="border-t -mx-2 my-2"></li>
                <li class="hover:bg-gray-100 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                    <i class="mdi mdi-trash-can-outline text-red-500 mr-1 text-lg"></i>
                    Delete
                </li>
            </ul>
        </template>

        <template id="folderColorPopupTemplate{{ $folder->id }}">
            <ul x-data="{ index: 3 }" class="w-48 py-2 px-1 grid grid-cols-5 gap-1.5">
                <template x-for="i in (5 * 3)" :key="i">
                    <li
                        @click="index = i"
                        class="aspect-square w-full bg-gray-300 cursor-pointer hover:shadow-lg transition flex items-center justify-center"
                    >
                        <i class="mdi mdi-check text-white text-xl" x-show="i === index" x-transition></i>
                    </li>
                </template>
            </ul>
        </template>
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

@push('scripts')
    <script>
        document.addEventListener('alpine:init', () => {
            Alpine.data('item', () => ({
                active: false,
                init() {
                    const observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            if (mutation.addedNodes.length) {
                                initializeTippy();
                            }
                        });
                    });
                    observer.observe(this.$el, {childList: true});

                    initializeTippy();
                    function initializeTippy() {
                        const config = {
                            interactive: true,
                            trigger: 'click',
                            allowHTML: true,
                            appendTo: 'parent',
                            theme: 'light',
                            placement: 'bottom-end',
                            content: getContent,
                        };
                        tippy('#folderPopupTrigger{{ $folder->id }}', config)
                        tippy('#folderColorPopupTrigger{{ $folder->id }}', {
                            ...config,
                            placement: 'right-start',
                        })
                    }

                    function getContent(reference) {
                        const id = reference.getAttribute('data-template');
                        const template = document.getElementById(id);
                        return template.innerHTML;
                    }
                }
            }))
        })
    </script>
@endpush
