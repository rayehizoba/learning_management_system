<?php

namespace App\Http\Livewire;

use App\Models\Quiz;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class ShowQuizes extends Component
{
    public Collection $quizes;

    public function render()
    {
        $this->quizes = Quiz::all();
        return view('livewire.show-quizes');
    }
}
