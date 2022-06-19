<div class="flex flex-col space-y-6 overflow-y-auto flex-1 p-5 pb-0">
    <figure class="bg-white shadow rounded-lg p-3 flex items-center sticky top-0">
        <div class="border rounded h-10 w-10 flex items-center justify-center">
            <img src="/img/lms_logo.png" alt="logo" class="w-4"/>
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
            <x-navigation.link :href="route('inbox')" :active="Route::is('inbox')">
                <x-slot:icon>
                    <i class="mdi mdi-email-outline"></i>
                </x-slot:icon>
                Inbox
            </x-navigation.link>
        </li>
        <li class="border-t border-white/50"></li>
        <li>
            <x-navigation.dropdown :open="Route::is(['courses', 'quizes', 'manuals', 'files-folders'])">
                <x-navigation.link dropdown :active="Route::is(['courses', 'quizes', 'manuals', 'files-folders'])">
                    <x-slot:icon>
                        <i class="mdi mdi-clipboard-text-outline"></i>
                    </x-slot:icon>
                    Contents
                </x-navigation.link>
                <x-slot:children>
                    <x-navigation.link :href="route('courses')" :active="Route::is('courses')">
                        Courses
                    </x-navigation.link>
                    <x-navigation.link :href="route('quizes')" :active="Route::is('quizes')">
                        Quiz
                    </x-navigation.link>
                    <x-navigation.link :href="route('manuals')" :active="Route::is('manuals')">
                        Manuals
                    </x-navigation.link>
                    <x-navigation.link :href="route('files-folders')" :active="Route::is('files-folders')">
                        Files & Folders
                    </x-navigation.link>
                </x-slot:children>
            </x-navigation.dropdown>
        </li>
        <li>
            <x-navigation.link :href="route('learning-path')" :active="Route::is('learning-path')">
                <x-slot:icon>
                    <i class="mdi mdi-book-open-outline"></i>
                </x-slot:icon>
                Learning Path
            </x-navigation.link>
        </li>
        <li>
            <x-navigation.link :href="route('public-site')" :active="Route::is('public-site')">
                <x-slot:icon>
                    <i class="mdi mdi-application-outline"></i>
                </x-slot:icon>
                Public Site
            </x-navigation.link>
        </li>
        <li>
            <x-navigation.dropdown :open="Route::is(['individual', 'group'])">
                <x-navigation.link dropdown :active="Route::is(['individual', 'group'])">
                    <x-slot:icon>
                        <i class="mdi mdi-account-outline"></i>
                    </x-slot:icon>
                    User
                </x-navigation.link>
                <x-slot:children>
                    <x-navigation.link :href="route('individual')" :active="Route::is('individual')">
                        Individual
                    </x-navigation.link>
                    <x-navigation.link :href="route('group')" :active="Route::is('group')">
                        Group
                    </x-navigation.link>
                </x-slot:children>
            </x-navigation.dropdown>
        </li>
        <li>
            <x-navigation.link :href="route('tracking')" :active="Route::is('tracking')">
                <x-slot:icon>
                    <i class="mdi mdi-poll"></i>
                </x-slot:icon>
                Tracking
            </x-navigation.link>
        </li>
    </ul>

    <ul class="space-y-3 sticky bottom-0 backdrop-blur pt-3 pb-5 border-t border-white/50">
        <li>
            <x-navigation.link :href="route('help')" :active="Route::is('help')">
                <x-slot:icon>
                    <i class="mdi mdi-chat-question-outline"></i>
                </x-slot:icon>
                Help
            </x-navigation.link>
        </li>
        <li>
            <x-navigation.link :href="route('settings')" :active="Route::is('settings')">
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
</div>
