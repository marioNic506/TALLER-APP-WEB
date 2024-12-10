<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proyectos', function (Blueprint $table) {
            $table->id('ID_Proyecto');
            $table->string('Título', 150);
            $table->text('Descripción')->nullable();
            $table->foreignId('ID_Estudiante')->constrained('estudiantes', 'ID_Estudiante');
            $table->foreignId('ID_Tutor')->constrained('tutors', 'ID_Tutor');
            $table->foreignId('ID_Estado')->constrained('estado_proyectos', 'ID_Estado');
            $table->date('Fecha_Inicio');
            $table->date('Fecha_Fin')->nullable();
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectos');
    }
};
