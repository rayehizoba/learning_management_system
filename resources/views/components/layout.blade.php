@props([
    'aside',
    'title',
    'header',
])

    <!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.6.96/css/materialdesignicons.min.css">

    <!-- Styles -->
    <meta name=theme-color content=#000>
    <link rel="stylesheet" href="https://unpkg.com/tippy.js@6/themes/light.css"/>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    @livewireStyles
    @stack('styles')
</head>
<body x-cloak x-data class="relative antialiased">

<main class="h-screen w-screen overflow-hidden relative flex">

    <!--  LHS: Main Menu  -->
    <aside
        :class="open ? 'opacity-100':'opacity-0'"
        class="absolute inset-y-0 left-0 w-72 lg:w-3/12 xl:w-1/5 flex transition"
    >
        @isset($aside)
            {{ $aside }}
        @else
            <x-navigation/>
        @endisset
    </aside>

    <!--  RHS: Main Content  -->
    <section
        :class="$store.sideNav.open ? 'lg:w-9/12 xl:w-4/5 translate-x-72 lg:translate-x-0 p-5' : 'p-0'"
        class="w-full ml-auto transition-all transform"
    >
        <div
            :class="$store.sideNav.open ? '-ml-5 rounded-2xl shadow' : ''"
            class="bg-white overflow-y-auto h-full transition-all"
        >
            <header class="sticky top-0 z-10 bg-white py-3 px-4 md:px-5 border-b">
                @isset($header)
                    {{ $header }}
                @else
                    <div class="flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between">
                        <div class="flex items-center space-x-3 md:space-x-5">
                            <x-aside-toggle-btn/>
                            <div class="h-10 md:h-7 border-l border-gray-300"></div>
                            <div class="">
                                @isset($title)
                                    <div class="text-xl md:text-2xl font-bold">
                                        {{ $title }}
                                    </div>
                                @else
                                    <div class="text-xl md:text-2xl font-semibold">
                                        Welcome, Raymond 👋
                                    </div>
                                    <div class="text-gray-400 text-xs">
                                        Here's what happened with your learning system
                                    </div>
                                @endisset
                            </div>
                        </div>
                        <div class="flex items-center space-x-5 justify-between">
                            <ul class="flex space-x-3 w-1/2 md:w-auto">
                                <li class="js-tippy-parent">
                                    <button
                                        data-template="new_menu_template"
                                        class="btn-primary h-9 aspect-square"
                                        type="button"
                                    >
                                        <i class="mdi mdi-plus text-xl"></i>
                                    </button>

                                    <template id="new_menu_template">
                                        <ul class="w-52 py-1">
                                            <li class="text-gray-400 px-1 text-xs mb-1 font-semibold">
                                                Content
                                            </li>
                                            <li>
                                                <a
                                                    href="{{ route('create-course') }}"
                                                    class="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center"
                                                >
                                                    <i class="mdi mdi-plus mr-1 text-lg"></i>
                                                    New Course
                                                </a>
                                            </li>
                                            <li class="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                                                <i class="mdi mdi-plus mr-1 text-lg"></i>
                                                New Quiz
                                            </li>
                                            <li class="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                                                <i class="mdi mdi-plus mr-1 text-lg"></i>
                                                New Manual
                                            </li>

                                            <li class="border-t -mx-2 my-2"></li>

                                            <li class="text-gray-400 px-1 text-xs mb-1 font-semibold">
                                                Users
                                            </li>
                                            <li class="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                                                <i class="mdi mdi-plus mr-1 text-lg"></i>
                                                Add New User
                                            </li>
                                            <li class="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                                                <i class="mdi mdi-plus mr-1 text-lg"></i>
                                                Create New Group
                                            </li>

                                            <li class="border-t -mx-2 my-2"></li>

                                            <li class="text-gray-400 px-1 text-xs mb-1 font-semibold">
                                                Files & Folders
                                            </li>
                                            <li class="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                                                <i class="mdi mdi-plus mr-1 text-lg"></i>
                                                Upload File
                                            </li>
                                            <li class="hover:bg-teal-100 hover:text-teal-600 p-0.5 px-1 cursor-pointer font-medium flex items-center">
                                                <i class="mdi mdi-plus mr-1 text-lg"></i>
                                                Create New Folder
                                            </li>
                                        </ul>
                                    </template>
                                </li>
                                <li>
                                    <button class="btn-outline h-9 aspect-square">
                                        <i class="mdi mdi-bell-outline text-xl"></i>
                                    </button>
                                </li>
                                <li>
                                    <button class="btn-outline h-9 aspect-square">
                                        <i class="mdi mdi-magnify text-xl"></i>
                                    </button>
                                </li>
                            </ul>
                            <div class="h-10 md:h-7 border-l border-gray-300 hidden md:block"></div>
                            <div class="w-1/2 md:w-auto">
                                <div
                                    class="select-none flex items-center space-x-2 cursor-pointer relative before:absolute before:-inset-1 before:-inset-x-2 before:hover:bg-gray-100 before:transition before:rounded-md">
                                    <div class="relative rounded-full w-8 aspect-square bg-gray-200"></div>
                                    <div class="relative flex-1">
                                        <div class="text-sm font-semibold">
                                            Theresa
                                        </div>
                                        <div class="text-gray-400 text-xs">
                                            Super Admin
                                        </div>
                                    </div>
                                    <i class="relative mdi mdi-chevron-down text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                @endisset
            </header>
            <section class="">
                {{ $slot }}
            </section>
        </div>
    </section>
</main>

{{-- Linear Gradient BG --}}
<figure class="fixed inset-0 bg-gradient-to-tr from-[#41b8b0] via-[#f0bc05] to-[#e4f7ee] opacity-25 -z-10">
</figure>

<!-- Scripts -->
<script src="//unpkg.com/alpinejs" defer></script>
<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
@livewireScripts
@stack('scripts')
@livewire('livewire-ui-modal')

<script>
    document.addEventListener('alpine:init', () => {
        // side nav global store
        Alpine.store('sideNav', {
            open: true,

            toggle() {
                this.open = !this.open
            }
        })
    })

    // tooltips initialization
    function initializeTippy() {
        document.querySelectorAll('[data-template]').forEach(btn => {
            tippy(btn, {
                content(reference) {
                    const id = reference.getAttribute('data-template');
                    const template = document.getElementById(id);
                    return template.innerHTML;
                },
                interactive: true,
                trigger: 'click',
                allowHTML: true,
                theme: 'light',
                placement: 'bottom-end',
            })
        })
    }

    initializeTippy()
</script>

</body>
</html>
