<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoProyecto extends Model
{
    use HasFactory;

    // Especifica el nombre correcto de la tabla
    protected $table = 'estado_proyectos';  // Asegúrate de que este sea el nombre correcto de la tabla

    // Si la clave primaria no es 'id', la defines explícitamente
    protected $primaryKey = 'ID_Estado';

    // Los campos que pueden ser asignados en masa
    protected $fillable = [
        'Descripción',
    ];
}
