<div>
{{--    <x-slot name="header">--}}
        <div class="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3 justify-between">
            <div class="flex items-center flex-1">
                <x-aside-toggle-btn class="lg:hidden"/>
                <div class="lg:hidden h-10 md:h-7 border-l border-gray-300 mx-3 md:mx-5"></div>
                <div class="flex flex-col lg:flex-row lg:flex-1 lg:items-center lg:justify-between lg:space-x-3">
                    <div class="text-xl font-bold whitespace-nowrap">
                        Create Course
                    </div>
                    <p class="text-sm text-gray-400 font-medium">
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
                    <div class="relative">
                        <select class="btn-outline h-10 w-full appearance-none outline-none">
                            <option value="0">Draft</option>
                            <option value="1">Published</option>
                        </select>
                        <div class="absolute right-4 inset-y-0 grid place-content-center">
                            <i class="mdi mdi-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                </li>
                <li>
                    <button
                        wire:click="save"
{{--                        wire:loading.delay.attr="disabled"--}}
{{--                        wire:target="save"--}}
                        class="btn-primary h-10 w-full"
                        type="button"
                    >
{{--                        <div wire:loading.delay wire:target="save">--}}
{{--                            <x-spinner/>--}}
{{--                        </div>--}}
                        Save
                    </button>
                </li>
            </ul>
        </div>
{{--    </x-slot>--}}

    @isset($section)
        {{-- Course Section Content--}}
        <section>
            <header
                x-data="{ name: @entangle('section.name') }"
                class="p-3 px-4 md:px-7 border-b flex items-start justify-between space-x-3"
            >
                <div
                    x-on:blur="name = $event.target.innerHTML"
                    contenteditable
                    role="textbox"
                    data-placeholder="Section Title"
                    class="text-2xl lg:text-3xl font-semibold border-b border-dashed before:content-['Section Title'] before:text-gray-400 outline-none"
                >{{ $section->name }}</div>
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
                            data-menu-template="course-content"
                            class="btn text-gray-400 !py-1 !px-2"
                        >
                            <i class="mdi mdi-plus text-2xl mr-1"></i>
                            Content
                        </button>
                        <x-menu-template.course-content/>
                    </li>
                    <li>
                        <button data-library class="btn text-gray-400 !py-1 !px-2">
                            <i class="mdi mdi-newspaper-variant-outline text-2xl mr-1"></i>
                            Library
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    @else
        {{-- Course General Information --}}
        <section class="max-w-4xl mx-auto p-5">
            <form class="space-y-7">
                <div class="flex space-x-5 justify-between">
                    <div class="space-y-1">
                        <h1 class="text-xl md:text-2xl font-bold">
                            Set the General Information
                        </h1>
                        <p class="text-gray-400 text-xs md:text-sm font-medium">
                            This information will attract learners to take this course, and help them find it easily.
                        </p>
                    </div>
                    <button type="button" class="flex items-center hover:opacity-50 text-gray-400">
                        <i class="mdi mdi-cog-outline text-2xl mr-1"></i>
                        Menu
                    </button>
                </div>

                <div class="grid md:grid-cols-2 gap-5">
                    <div class="space-y-2 md:col-span-2">
                        <label class="font-bold">Course Cover</label>
                        <div
                            class="rounded-md group aspect-[5/2] md:aspect-[6/2] bg-gray-200 w-full relative grid place-content-center">
                            <i class="mdi mdi-image text-7xl md:text-9xl text-gray-100"></i>
                            <button
                                class="absolute top-0 right-0 hover:opacity-75 rounded-full bg-black text-white grid place-content-center w-7 aspect-square -m-3.5"
                                type="button"
                            >
                                <i class="mdi mdi-close"></i>
                            </button>
                            <div
                                class="rounded-md md:pointer-events-none group-hover:pointer-events-auto md:opacity-0 group-hover:opacity-100 transition absolute inset-0 top-0 bg-gradient-to-b from-transparent to-black/25 grid place-content-end">
                                <input type="file" x-ref="cover" accept="image/*" class="hidden"/>
                                <button
                                    @click="$refs.cover.click()"
                                    class="btn-outline m-3 md:m-5 font-semibold flex items-center space-x-1 text-sm"
                                >
                                    <i class="mdi mdi-camera-outline text-lg"></i>
                                    <span>Upload Cover</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-2 space-y-2 flex flex-col">
                        <label class="font-bold after:content-['*'] after:text-red-600">
                            Course Name
                        </label>
                        <input wire:model="course.name" class="form-input"/>
                        @error('course.name') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="space-y-2 flex flex-col">
                        <label class="font-bold after:content-['*'] after:text-red-600">
                            Course Category
                        </label>
                        <select class="form-input"></select>
                        @error('course.category') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="space-y-2 flex flex-col">
                        <label class="font-bold after:content-['*'] after:text-red-600">
                            Focus Area
                        </label>
                        <select class="form-input"></select>
                        @error('course.focus_area') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="md:col-span-2 space-y-2 flex flex-col">
                        <label class="font-bold">
                            Course Description
                        </label>
                        <textarea wire:model="course.description" rows="5" class="form-input"></textarea>
                        @error('course.description') <span class="error">{{ $message }}</span> @enderror
                    </div>
                </div>
            </form>
        </section>
    @endisset
</div>
