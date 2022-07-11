<?php

namespace App\Http\Livewire;

use App\Models\Quiz;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Component;

class ShowQuizzes extends Component
{
    public Collection $quizzes;

    public bool $grid = true;

    public function render()
    {
        $this->quizzes = Quiz::all();
        return view('livewire.show-quizzes');
    }
}
