<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Estudiante; // Importar el modelo Estudiante
use Illuminate\Http\Request;

class EstudianteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Estudiante::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'Nombre' => 'required|string|max:100',
            'Apellido' => 'required|string|max:100',
            'Carrera' => 'required|string|max:50',
            'Año_Ingreso' => 'required|integer|min:1900|max:' . now()->year,
        ]);

        return Estudiante::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Estudiante::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $estudiante = Estudiante::findOrFail($id);

        $validated = $request->validate([
            'Nombre' => 'string|max:100',
            'Apellido' => 'string|max:100',
            'Carrera' => 'string|max:50',
            'Año_Ingreso' => 'integer|min:1900|max:' . now()->year,
        ]);

        $estudiante->update($validated);

        return $estudiante;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $estudiante = Estudiante::findOrFail($id);
        $estudiante->delete();

        return response()->noContent();
    }
}