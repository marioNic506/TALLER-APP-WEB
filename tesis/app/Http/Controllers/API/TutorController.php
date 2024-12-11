<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tutor; 
use Illuminate\Http\Request;

class TutorController extends Controller
{

    public function index()
    {
        return Tutor::all();
    }


    public function show($id)
    {
        return Tutor::findOrFail($id);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'Nombre' => 'required|string|max:100',
            'Apellido' => 'required|string|max:100',
            'Especialidad' => 'required|string|max:100',
        ]);
        return Tutor::create($validated);
    }


    public function update(Request $request, $id)
    {
        $tutor = Tutor::findOrFail($id);
        $validated = $request->validate([
            'Nombre' => 'string|max:100',
            'Apellido' => 'string|max:100',
            'Especialidad' => 'string|max:100',
        ]);
        $tutor->update($validated);
        return $tutor;
    }


    public function destroy($id)
    {
        $tutor = Tutor::findOrFail($id);
        $tutor->delete();
        return response()->noContent();
    }
}
