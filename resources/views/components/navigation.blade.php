<aside
    {{ $attributes->merge(['class' => 'absolute inset-y-0 left-0 p-5 pr-0 w-60 flex flex-col space-y-6 overflow-y-auto']) }}
>
    <figure class="bg-white shadow rounded-lg p-3 flex items-center sticky top-0">
        <div class="border rounded h-10 w-10 flex items-center justify-center">
            <div class="h-5 w-5 rounded-md rounded-tr-none bg-black"></div>
        </div>
        <div class="px-2">
            Fikri Studio
        </div>
        <i class="mdi mdi-unfold-more-horizontal text-xl text-gray-400 ml-auto px-2"></i>
    </figure>

    <ul class="space-y-3 flex-1 select-none">
        <li>
            <x-navigation.link :href="route('dashboard')" :active="Route::is('dashboard')">
                <x-slot:icon>
                    <i class="mdi mdi-view-dashboard-outline"></i>
                </x-slot:icon>
                Dashboard
            </x-navigation.link>
        </li>
        <li>
            <x-navigation.link href="#">
                <x-slot:icon>
                    <i class="mdi mdi-email-outline"></i>
                </x-slot:icon>
                Inbox
            </x-navigation.link>
        </li>
        <li class="border-t"></li>
        <li>
            <x-navigation.dropdown>
                <x-navigation.link>
                    <x-slot:icon>
                        <i class="mdi mdi-clipboard-text-outline"></i>
                    </x-slot:icon>
                    Contents
                </x-navigation.link>
                <x-slot:children>
                    <x-navigation.link href="#">
                        Courses
                    </x-navigation.link>
                    <x-navigation.link href="#">
                        Quiz
                    </x-navigation.link>
                    <x-navigation.link href="#">
                        Manuals
                    </x-navigation.link>
                    <x-navigation.link :href="route('files-folders')" :active="Route::is('files-folders')">
                        Files & Folders
                    </x-navigation.link>
                </x-slot:children>
            </x-navigation.dropdown>
        </li>
        <li>
            <x-navigation.link href="#">
                <x-slot:icon>
                    <i class="mdi mdi-book-open-outline"></i>
                </x-slot:icon>
                Learning Path
            </x-navigation.link>
        </li>
        <li>
            <x-navigation.link href="#">
                <x-slot:icon>
                    <i class="mdi mdi-application-outline"></i>
                </x-slot:icon>
                Public Site
            </x-navigation.link>
        </li>
        <li>
            <x-navigation.dropdown>
                <x-navigation.link>
                    <x-slot:icon>
                        <i class="mdi mdi-account-outline"></i>
                    </x-slot:icon>
                    User
                </x-navigation.link>
                <x-slot:children>
                    <x-navigation.link href="#">
                        Individual
                    </x-navigation.link>
                    <x-navigation.link href="#">
                        Group
                    </x-navigation.link>
                </x-slot:children>
            </x-navigation.dropdown>
        </li>
        <li>
            <x-navigation.link href="#">
                <x-slot:icon>
                    <i class="mdi mdi-poll"></i>
                </x-slot:icon>
                Tracking
            </x-navigation.link>
        </li>
    </ul>

    <ul class="space-y-3 sticky bottom-0 backdrop-blur">
        <li>
            <x-navigation.link href="#">
                <x-slot:icon>
                    <i class="mdi mdi-chat-question-outline"></i>
                </x-slot:icon>
                Help
            </x-navigation.link>
        </li>
        <li>
            <x-navigation.link href="#">
                <x-slot:icon>
                    <i class="mdi mdi-cog-outline"></i>
                </x-slot:icon>
                Settings
            </x-navigation.link>
        </li>
        <li>
            <a href="#" class="group px-2 block">
                <div class="text-gray-400 text-xs">Powered by</div>
                <div class="font-bold text-xl text-red-900 group-hover:text-red-700 transition">Razortech</div>
            </a>
        </li>
    </ul>
</aside>
