<?php

namespace App\Http\Livewire;

use App\Models\Folder;
use LivewireUI\Modal\ModalComponent;

class EditFolder extends ModalComponent
{
    public $name;
    public $parentId;

    public static function modalMaxWidth(): string
    {
        return 'sm';
    }

    public function mount($parentId)
    {
        $this->parentId = $parentId;
    }

    public function submit()
    {
        $data = [
            'name' => $this->name ?? 'Untitled folder',
        ];

        if (isset($this->parentId)) {
            $data['parent_id'] = $this->parentId;
        }

        Folder::create($data);

//        $this->emit('folderAdded');
//        $this->closeModal();
        $this->closeModalWithEvents(['folderAdded']);
    }

    public function render()
    {
        return view('livewire.edit-folder');
    }
}
