<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\EstadoProyecto; // Importa el modelo EstadoProyecto
use Illuminate\Http\Request;

class EstadoProyectoController extends Controller
{
    // Mostrar todos los estados de los proyectos
    public function index()
    {
        return EstadoProyecto::all();
    }

    // Mostrar un estado de proyecto específico
    public function show($id)
    {
        return EstadoProyecto::findOrFail($id);
    }

    // Crear un nuevo estado de proyecto
    public function store(Request $request)
    {
        $validated = $request->validate([
            'Descripción' => 'required|string|max:100',
        ]);
        return EstadoProyecto::create($validated);
    }

    // Actualizar un estado de proyecto existente
    public function update(Request $request, $id)
    {
        $estadoProyecto = EstadoProyecto::findOrFail($id);
        $validated = $request->validate([
            'Descripción' => 'string|max:100',
        ]);
        $estadoProyecto->update($validated);
        return $estadoProyecto;
    }

    // Eliminar un estado de proyecto
    public function destroy($id)
    {
        $estadoProyecto = EstadoProyecto::findOrFail($id);
        $estadoProyecto->delete();
        return response()->noContent();
    }
}
