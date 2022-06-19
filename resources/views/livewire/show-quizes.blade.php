<div>
    <header class="p-5 border-b flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5">
        <div class="md:w-10/12 flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="text-2xl font-bold">
                {{ $quizes->count() }} <span class="text-gray-400">Quizes in total</span>
            </div>
            <ol class="flex justify-between md:justify-end items-center h-full space-x-7">
                <ol class="flex items-center h-full space-x-7">
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
                </ol>
                <li>
                    <div x-data="{ list: true }"
                         class="rounded-md border-2 border-gray-200 bg-gray-200 relative">
                        <div class="flex relative z-[1]">
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
            </ol>
        </div>
        <div class="md:w-2/12">
            <a href="{{ route('create-quiz') }}" class="w-full btn-primary">
                + New Quiz
            </a>
        </div>
    </header>
    <ul
        :class="$store.sideNav.open ? 'xl:grid-cols-3':'lg:grid-cols-3 xl:grid-cols-4'"
        class="grid grid-cols-1 sm:grid-cols-2 p-5 gap-7"
    >
        @foreach($quizes as $quiz)
            <li>
                <x-quiz-card :quiz="$quiz"/>
            </li>
        @endforeach
    </ul>
</div>
