@props(['quiz'])

<div class="border rounded divide-y">
    <header>
        <div class="p-3 flex items-center justify-between">
            <x-published-state :published="$quiz->published"/>
            <button
                class="h-5 w-5 hover:bg-gray-400 transition rounded-full flex items-center justify-center text-gray-400 hover:text-white">
                <i class="mdi mdi-dots-horizontal text-2xl"></i>
            </button>
        </div>
        <figure class="w-full aspect-[3/1] bg-gray-300 text-gray-100 grid place-content-center">
            <i class="mdi mdi-image text-5xl"></i>
        </figure>
        <div class="p-3">
            <p class="font-semibold line-clamp-1">
                {{ $quiz->name }}
            </p>
            <div class="flex items-center space-x-5">
                <div class="flex items-center space-x-1 text-gray-400">
                    <i class="mdi mdi-account-circle-outline"></i>
                    <span class="text-xs">24 Learners</span>
                </div>
                <div class="flex items-center space-x-1 text-gray-400">
                    <i class="mdi mdi-license"></i>
                    <span class="text-xs">Design</span>
                </div>
            </div>
        </div>
    </header>

    @if($quiz->published)
        <div class="divide-x flex items-center h-16">
            <div class="p-3 space-y-1.5">
                <p class="text-xs text-gray-400">Avg Correct Answer</p>
                <p class="text-sm line-clamp-1">
                    <span class="text-red-500">12</span> / 24 <span class="font-bold">(50% correct answer rate)</span>
                </p>
            </div>
        </div>
    @else
        <div class="flex items-center justify-center h-16 text-gray-400 space-x-2">
            <i class="mdi mdi-finance"></i>
            <p class="text-sm">This quiz has no stats yet</p>
        </div>
    @endif

    <footer class="p-4">
        <button :disabled="i > 1" class="btn-primary-outline w-full">
            <i class="mdi mdi-plus"></i>
            Assign
        </button>
    </footer>
</div>
