@props(['published'])

@if($published)
    <div class="inline-flex bg-green-100 text-green-600 text-xs p-1 px-2 rounded-md">
        <i class="mdi mdi-web"></i>
        Published
    </div>
@else
    <div class="inline-flex bg-gray-100 text-gray-500 text-xs p-1 px-2 rounded-md">
        <i class="mdi mdi-square-edit-outline"></i>
        Draft
    </div>
@endif
