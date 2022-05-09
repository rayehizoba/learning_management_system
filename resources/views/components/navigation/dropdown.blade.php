<div x-data="{open: false}">
    <div @click="open = !open" class="relative">
        {{ $slot }}
        <i class="absolute right-2 top-1/2 transform -translate-y-1/2 mdi opacity-50" :class="open ? 'mdi-chevron-up' : 'mdi-chevron-down'"></i>
    </div>
    <div
        :class="open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'"
        class="transition-all"
    >
        {{ $children }}
    </div>
</div>
