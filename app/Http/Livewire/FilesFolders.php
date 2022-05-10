<?php

namespace App\Http\Livewire;

use App\Models\Folder;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class FilesFolders extends Component
{
    public Collection $rootFolders;
    public Collection $allFolders;
    public ?Folder $selectedFolder;

    protected $listeners = ['folderAdded' => '$refresh'];

    public function selectFolder(Folder $folder)
    {
        $this->selectedFolder = $folder;
//        if ($folder->id >= 10) {
//            dd($folder->ancestors);
//        }
    }

    public function resetFolder()
    {
        $this->selectedFolder = null;
    }

    public function render()
    {
        $this->rootFolders = Folder::root()->get();
        $this->allFolders = Folder::all();

        return view('livewire.files-folders')
            ->layout('components.layout', [
                'heading' => 'Files & Folders'
            ]);
    }
}
