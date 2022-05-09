<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.6.96/css/materialdesignicons.min.css">

    <!-- Styles -->
    <meta name=theme-color content=#000>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    @livewireStyles
    @stack('styles')
</head>
<body x-cloak x-data="{open: true}" class="relative antialiased">

<main class="p-5 h-screen flex overflow-hidden">
    <x-navigation ::class="open ? 'opacity-100':'opacity-0'" class="transition"/>
    <div
        :class="open ? 'ml-60':'ml-0'"
        class="z-10 transition-all rounded-2xl shadow w-full flex-1 bg-white overflow-y-auto"
    >
        <header class="py-3 px-7 sticky top-0 z-10 bg-white border-b">
            <div class="flex justify-between">
                <div class="flex items-center space-x-5">
                    <button
                        @click="open = !open"
                        class="rounded border-2 border-l-[10px] h-7 w-7 border-gray-400 transition hover:bg-gray-100 hover:ring-8 ring-gray-100"
                    >
                        <i :class="open ? 'mdi-chevron-left':'mdi-chevron-right'" class="mdi text-gray-400"></i>
                    </button>
                    <div class="h-7 border-l"></div>
                    <div class="">
                        <div class="text-2xl font-semibold">
                            Welcome, Raymond 👋
                        </div>
                        <div class="text-gray-400 text-xs">
                            Here's what happened with your learning system
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-5">
                    <ul class="flex space-x-3">
                        <li>
                            <button class="bg-teal-500 h-9 w-9 rounded-md text-white text-xl">
                                <i class="mdi mdi-plus"></i>
                            </button>
                        </li>
                        <li>
                            <button class="border h-9 w-9 rounded-md text-xl text-gray-400">
                                <i class="mdi mdi-bell-outline"></i>
                            </button>
                        </li>
                        <li>
                            <button class="border h-9 w-9 rounded-md text-xl text-gray-400">
                                <i class="mdi mdi-magnify"></i>
                            </button>
                        </li>
                    </ul>
                    <div class="h-7 border-l"></div>
                    <div class="flex items-center space-x-2 cursor-pointer hover:opacity-75 transition">
                        <div class="rounded-full w-8 h-8 bg-gray-200"></div>
                        <div class="">
                            <div class="text-sm font-semibold">
                                Theresa
                            </div>
                            <div class="text-gray-400 text-xs">
                                Super Admin
                            </div>
                        </div>
                        <i class="mdi mdi-chevron-down text-gray-400"></i>
                    </div>
                </div>
            </div>
        </header>
        <section class="p-5">
            {{ $slot }}
        </section>
    </div>
</main>

{{-- Linear Gradient BG --}}
<figure class="fixed inset-0 bg-gradient-to-tr from-[#41b8b0] via-[#f0bc05] to-[#e4f7ee] opacity-25 -z-10">
</figure>

<!-- Scripts -->
<script src="//unpkg.com/alpinejs" defer></script>
@livewireScripts
@stack('scripts')

</body>
</html>
