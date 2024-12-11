<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\EstadoProyecto; 
use Illuminate\Http\Request;

class EstadoProyectoController extends Controller
{
    public function index()
    {
        return EstadoProyecto::all();
    }

 
    public function show($id)
    {
        return EstadoProyecto::findOrFail($id);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'Descripción' => 'required|string|max:100',
        ]);
        return EstadoProyecto::create($validated);
    }


    public function update(Request $request, $id)
    {
        $estadoProyecto = EstadoProyecto::findOrFail($id);
        $validated = $request->validate([
            'Descripción' => 'string|max:100',
        ]);
        $estadoProyecto->update($validated);
        return $estadoProyecto;
    }


    public function destroy($id)
    {
        $estadoProyecto = EstadoProyecto::findOrFail($id);
        $estadoProyecto->delete();
        return response()->noContent();
    }
}
