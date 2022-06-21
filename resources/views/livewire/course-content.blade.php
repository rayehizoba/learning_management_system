<div class="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">
    <div x-data="{ expand: true }" class="md:w-1/4">
        <ul
            :style="{maxHeight: expand ? (@json(count($course->sections)) * 6) + 'rem': 0}"
            class="md:!max-h-fit overflow-hidden transition-all flex-1 divide-y divide-gray-200"
        >
            @foreach($course->sections as $each)
                <li
                    wire:click="setSectionIndex('{{ $loop->index }}')"
                    class="{{ isset($section) && $section === $each ? '!border-l-yellow-400 bg-green-100':'!border-l-gray-300 hover:!border-l-yellow-300' }} border-l-4 p-4 transition cursor-pointer"
                >
                    <div>
                        <p class="line-clamp-2">
                            {{ $each->name ?? 'Section - '.$loop->iteration }}
                        </p>
                        <p class="text-gray-400 text-xs">
                            Updated: March 17, 2021 4:22pm {{ $each->updated_at }}
                        </p>
                    </div>
                </li>
            @endforeach
        </ul>
        <div
            @click="expand = !expand"
            :class="expand ? 'border-t border-gray-200':''"
            class="cursor-pointer p-4 font-bold bg-gray-100 hover:bg-teal-100 md:hidden flex items-center"
        >
            <i class="mdi mdi-unfold-more-horizontal text-2xl text-gray-400"></i>
            <span x-text="expand ? 'Hide Course Sections':'View Course Sections'">
                    </span>
        </div>
    </div>
    <article class="md:w-3/4 p-4 md:p-5">
        <p class="text-2xl font-bold mb-1">Lorem ipsum dolor sit amet.</p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem commodi, corporis
        eius fugiat, ipsum minus molestias, perferendis placeat quos velit voluptates. Blanditiis deleniti
        ipsum quasi quisquam rerum voluptatibus.
    </article>
</div>
