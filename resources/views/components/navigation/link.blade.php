@props(['active' => false,])

<a
    {{ $attributes }}
    class="block {{ isset($icon) ? 'px-2 py-1' : 'p-2 pl-9' }} flex items-center space-x-2 rounded-md
        transition {{ $active ? 'bg-teal-400/25 hover:bg-teal-400/50' : 'hover:bg-white/25 text-gray-500' }}"
>
    @isset($icon)
        <span class="text-xl {{ $active ? 'text-teal-500' : '' }}">
            {{ $icon }}
        </span>
    @endisset
    <span class="font-medium">{{ $slot }}</span>
</a>
