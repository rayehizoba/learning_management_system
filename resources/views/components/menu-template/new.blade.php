<template id="new" hidden>
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
