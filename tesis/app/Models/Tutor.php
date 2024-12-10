<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;

    // Aquí se especifica el nombre correcto de la tabla
    protected $table = 'tutors'; // Cambia el nombre de la tabla a 'tutors'

    // Si la clave primaria no es 'id', puedes definirla explícitamente
    protected $primaryKey = 'ID_Tutor';

    // Asegúrate de incluir los campos que se pueden llenar
    protected $fillable = [
        'Nombre',
        'Apellido',
        'Especialidad',
    ];
}
