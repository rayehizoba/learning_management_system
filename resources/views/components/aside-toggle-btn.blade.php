<button
    @click="$store.sideNav.toggle()"
    :class="$store.sideNav.open ? 'border-l-[12px] hover:border-l-4' : 'border-l-4 hover:border-l-[12px]'"
    {{ $attributes->merge(['class' => 'rounded-md border-2 aspect-square w-9 md:w-8 border-gray-400 transition-all']) }}
>
    <i
        :class="$store.sideNav.open ? 'mdi-chevron-left':'mdi-chevron-right'"
        class="mdi text-gray-400 text-2xl md:text-lg"
    ></i>
</button>
