<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    use HasFactory;

    protected $table = 'proyectos';
    protected $primaryKey = 'ID_Proyecto';
    public $timestamps = false;

    protected $fillable = [
        'Título',
        'Descripción',
        'ID_Estudiante',
        'ID_Tutor',
        'ID_Estado',
        'Fecha_Inicio',
        'Fecha_Fin',
    ];

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class, 'ID_Estudiante', 'ID_Estudiante');
    }

    public function tutor()
    {
        return $this->belongsTo(Tutor::class, 'ID_Tutor', 'ID_Tutor');
    }

    public function estado()
    {
        return $this->belongsTo(EstadoProyecto::class, 'ID_Estado', 'ID_Estado');
    }
}
