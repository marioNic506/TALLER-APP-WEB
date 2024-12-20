<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Proyecto; 
use Illuminate\Http\Request;

class ProyectoController extends Controller
{

    public function index()
    {
        return Proyecto::with(['estudiante', 'tutor', 'estado'])->get();
    }

  
    public function show($id)
    {
        return Proyecto::with(['estudiante', 'tutor', 'estado'])->findOrFail($id);
    }

  
    public function store(Request $request)
    {
        $validated = $request->validate([
            'Título' => 'required|string|max:150',
            'Descripción' => 'nullable|string',
            'ID_Estudiante' => 'required|exists:estudiantes,ID_Estudiante',
            'ID_Tutor' => 'required|exists:tutors,ID_Tutor',
            'ID_Estado' => 'required|exists:estado_proyectos,ID_Estado',
            'Fecha_Inicio' => 'required|date',
            'Fecha_Fin' => 'nullable|date|after_or_equal:Fecha_Inicio',
        ]);
        return Proyecto::create($validated);
    }


    public function update(Request $request, $id)
    {
        $proyecto = Proyecto::findOrFail($id);
        $validated = $request->validate([
            'Título' => 'string|max:150',
            'Descripción' => 'nullable|string',
            'ID_Estudiante' => 'exists:estudiantes,ID_Estudiante',
            'ID_Tutor' => 'exists:tutors,ID_Tutor',
            'ID_Estado' => 'exists:estado_proyectos,ID_Estado',
            'Fecha_Inicio' => 'date',
            'Fecha_Fin' => 'nullable|date|after_or_equal:Fecha_Inicio',
        ]);
        $proyecto->update($validated);
        return $proyecto;
    }


    public function destroy($id)
    {
        $proyecto = Proyecto::findOrFail($id);
        $proyecto->delete();
        return response()->noContent();
    }
}
