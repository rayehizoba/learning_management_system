@props([
    'active' => false,
    'dropdown' => false
])

<a
    {{ $attributes }}
    class="block {{ isset($icon) ? 'px-2 py-1' : 'p-2 pl-10' }} flex items-center space-x-2 rounded-md
        transition {{ $active && !$dropdown ? 'bg-teal-400/25 hover:bg-teal-400/50' : 'hover:bg-white/25' }}
        {{ $active ? 'font-semibold text-gray-900' : 'font-medium hover:bg-white/25 text-gray-500' }}
    "
>
    @isset($icon)
        <span class="text-2xl {{ $active ? 'text-teal-500' : '' }}">
            {{ $icon }}
        </span>
    @endisset
    <span>{{ $slot }}</span>
</a>
