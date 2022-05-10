<form wire:submit.prevent="submit" class="relative bg-white rounded-lg shadow">
    <!-- Modal header -->
    <div class="flex justify-between items-start p-4 px-6 rounded-t">
        <h3 class="text-xl font-semibold text-gray-900">
            New folder
        </h3>
        <button
            wire:click="$emit('closeModal')"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
            </svg>
        </button>
    </div>

    <!-- Modal body -->
    <div class="px-6 pb-3">
        <input
            wire:model="name"
            type="text"
            autofocus
            class="border rounded focus:outline-none p-2 px-4 w-full focus:ring transition"
        />
    </div>

    <!-- Modal footer -->
    <div class="flex justify-end items-center p-4 px-6 space-x-2 rounded-b">
        <button
            wire:click="$emit('closeModal')"
            type="button"
            class="btn-outline w-24 text-sm"
        >
            Cancel
        </button>
        <button
            type="submit"
            class="btn-primary w-24 text-sm"
            wire:loading.attr="disabled"
        >
            Create
        </button>
    </div>
</form>
