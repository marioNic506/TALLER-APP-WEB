<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;


    protected $table = 'tutors'; 

 
    protected $primaryKey = 'ID_Tutor';


    protected $fillable = [
        'Nombre',
        'Apellido',
        'Especialidad',
    ];
}
