<div
    x-data="{
        grid: true,
        init() {
            $watch('grid', value => $dispatch('input', value))
        }
    }"
    class="rounded-md border-2 border-gray-200 bg-gray-200 relative"
    {{ $attributes }}
>
    <div class="flex relative z-[1]">
        <button
            @click="grid = true"
            class="w-8 aspect-square flex items-center justify-center">
            <i class="mdi mdi-view-grid-outline text-xl"></i>
        </button>
        <button
            @click="grid = false"
            class="w-8 aspect-square flex items-center justify-center">
            <i class="mdi mdi-format-list-bulleted text-xl"></i>
        </button>
    </div>
    <div
        :class="grid?'':'translate-x-full'"
        class="absolute inset-0 w-1/2 aspect-square bg-white rounded transform transition"
    ></div>
</div>
