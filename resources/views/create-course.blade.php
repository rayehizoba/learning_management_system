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
                                0
                            </p>
                        </div>
                        <button class="btn-primary h-9 w-9 !text-xl">
                            <i class="mdi mdi-plus"></i>
                        </button>
                    </div>
                </li>
                <li class="border-l-4 !border-l-yellow-600 p-4 px-1 bg-blue-100/30">
                    <div class="flex items-center space-x-1">
                        <i class="mdi mdi-drag-vertical text-gray-400 text-2xl cursor-grab"></i>
                        <div>
                            <p class="">
                                Section - 1
                            </p>
                            <p class="text-gray-400 text-xs">
                                Updated: March 17, 2021 4:22pm
                            </p>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="space-y-3 sticky bottom-0 backdrop-blur p-5 pt-3">
                <a href="#" class="group px-2 block">
                    <div class="text-gray-400 text-xs">Powered by</div>
                    <div class="font-bold text-xl text-red-900 group-hover:text-red-700 transition">Razortech</div>
                </a>
            </div>
        </div>
    </x-slot>

    <x-slot:header>
        <div class="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3 justify-between">
            <div class="flex items-center flex-1">
                <x-aside-toggle-btn class="lg:hidden"/>
                <div class="lg:hidden h-10 md:h-7 border-l border-gray-300 mx-3 md:mx-5"></div>
                <div class="flex flex-col lg:flex-row lg:flex-1 lg:items-center lg:justify-between lg:space-x-3">
                    <div class="text-xl font-bold whitespace-nowrap">
                        Create Course
                    </div>
                    <p class="text-xs text-gray-400 font-semibold">
                        Last Saved: March 17, 2021
                    </p>
                </div>
            </div>

            <ul class="grid grid-cols-3 gap-3 h-full lg:w-2/5">
                <li>
                    <button class="btn-outline h-10 w-full">
                        Preview
                    </button>
                </li>
                <li>
                    <button class="btn-outline h-10 w-full">
                        <span>Draft</span>
                        <i class="mdi mdi-chevron-down text-xl ml-1"></i>
                    </button>
                </li>
                <li>
                    <button class="btn-primary h-10 w-full">
                        Save
                    </button>
                </li>
            </ul>
        </div>
    </x-slot>

    <header class="p-3 px-4 md:px-7 border-b flex items-start justify-between space-x-3">
        <div
            contenteditable
            role="textbox"
            data-placeholder="Section Title"
            class="text-2xl lg:text-3xl font-semibold border-b border-dashed before:content-['Section Title'] before:text-gray-400 outline-none"
        ></div>
        <div class="flex items-center space-x-3 md:space-x-5 text-gray-400">
            <div class="flex items-center space-x-3 md:space-x-5">
                <button class="hover:opacity-50">
                    <i class="mdi mdi-undo text-2xl"></i>
                </button>
                <button class="hover:opacity-50">
                    <i class="mdi mdi-redo text-2xl"></i>
                </button>
            </div>
            <div class="h-8 border-l"></div>
            <button class="flex items-center hover:opacity-50">
                <i class="mdi mdi-cog-outline text-2xl mr-1"></i>
                Menu
            </button>
        </div>
    </header>

    <div class="max-w-4xl mx-auto p-5 space-y-3">
        <article class="space-y-3">
            <p
                contenteditable
                role="textbox"
                data-placeholder="New Text"
                class="focus:outline-none"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt, est eum quae quis
                reprehenderit! Accusantium excepturi expedita mollitia! Ea eius est facere fugiat laboriosam
                repellat repellendus veniam! Aliquam, quas.</p>

            <h1
                contenteditable
                role="textbox"
                data-placeholder="Header 1"
                class="focus:outline-none text-3xl"
            >
                Header 1
            </h1>

            <h2
                contenteditable
                role="textbox"
                data-placeholder="Header 2"
                class="focus:outline-none text-2xl"
            >
                Header 2
            </h2>

            <h3
                contenteditable
                role="textbox"
                data-placeholder="Header 3"
                class="focus:outline-none text-xl"
            >
                Header 3
            </h3>

            <div class="figure aspect-video w-full bg-gray-200 rounded-lg relative">
                <button
                    class="absolute top-0 right-0 hover:opacity-75 rounded-full bg-black text-white grid place-content-center w-6 h-6 -m-3"
                    type="button"
                >
                    <i class="mdi mdi-close"></i>
                </button>
            </div>
        </article>

        <ul class="flex items-center space-x-2">
            <li>
                <button
                    data-add-content
                    class="btn text-gray-400 !py-1 !px-2"
                >
                    <i class="mdi mdi-plus text-2xl mr-1"></i>
                    Content
                </button>
                <div
                    data-add-content-template
                    style="display: none;"
                    class="divide-y-2 -mx-2"
                >
                    <div class="font-medium">
                        <p class="p-4 pb-2 text-xs text-gray-400">
                            Basic blocks
                        </p>
                        <ul class="space-y-2 min-w-[18rem] py-2">
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-format-text text-2xl text-gray-400 mr-3"></i>
                                <span>Text</span>
                            </li>
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-format-list-bulleted text-2xl text-gray-400 mr-3"></i>
                                <span>Bullet List</span>
                            </li>
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-format-list-numbered text-2xl text-gray-400 mr-3"></i>
                                <span>Numbered List</span>
                            </li>
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-format-header-1 text-2xl text-gray-400 mr-3"></i>
                                <span>Header 1</span>
                            </li>
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-format-header-2 text-2xl text-gray-400 mr-3"></i>
                                <span>Header 2</span>
                            </li>
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-format-header-3 text-2xl text-gray-400 mr-3"></i>
                                <span>Header 3</span>
                            </li>
                        </ul>
                    </div>
                    <div class="font-medium">
                        <p class="p-4 pb-2 text-xs text-gray-400">
                            Media
                        </p>
                        <ul class="space-y-2 min-w-[18rem] py-2">
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-image-outline text-2xl text-gray-400 mr-3"></i>
                                <span>Image</span>
                            </li>
                            <li class="px-4 flex items-center space-x-1 hover:bg-gray-100">
                                <i class="mdi mdi-video-outline text-2xl text-gray-400 mr-3"></i>
                                <span>Video</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <button data-library class="btn text-gray-400 !py-1 !px-2">
                    <i class="mdi mdi-newspaper-variant-outline text-2xl mr-1"></i>
                    Library
                </button>
            </li>
        </ul>
    </div>
</x-layout>
