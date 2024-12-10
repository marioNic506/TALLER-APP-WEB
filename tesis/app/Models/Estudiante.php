<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;

    protected $table = 'estudiantes';
    protected $primaryKey = 'ID_Estudiante';
    public $timestamps = false;

    protected $fillable = [
        'Nombre',
        'Apellido',
        'Carrera',
        'Año_Ingreso',
    ];

    // Relación: Un estudiante puede tener muchos proyectos
    public function proyectos()
    {
        return $this->hasMany(Proyecto::class, 'ID_Estudiante', 'ID_Estudiante');
    }
}
