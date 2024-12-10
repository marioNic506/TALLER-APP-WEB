<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::apiResource('estudiantes', App\Http\Controllers\API\EstudianteController::class);
Route::apiResource('tutores', \App\Http\Controllers\API\TutorController::class);
Route::apiResource('estados', \App\Http\Controllers\API\EstadoProyectoController::class);
Route::apiResource('proyectos', \App\Http\Controllers\API\ProyectoController::class);
use App\Http\Controllers\API\TutorController;

Route::get('tutors', [TutorController::class, 'index']);
Route::get('tutors/{id}', [TutorController::class, 'show']);
Route::post('tutors', [TutorController::class, 'store']);
Route::put('tutors/{id}', [TutorController::class, 'update']);
Route::delete('tutors/{id}', [TutorController::class, 'destroy']);
use App\Http\Controllers\API\EstadoProyectoController;
use App\Http\Controllers\API\ProyectoController;

Route::get('estado_proyectos', [EstadoProyectoController::class, 'index']);
Route::get('estado_proyectos/{id}', [EstadoProyectoController::class, 'show']);
Route::post('estado_proyectos', [EstadoProyectoController::class, 'store']);
Route::put('estado_proyectos/{id}', [EstadoProyectoController::class, 'update']);
Route::delete('estado_proyectos/{id}', [EstadoProyectoController::class, 'destroy']);

Route::get('proyectos', [ProyectoController::class, 'index']);
Route::get('proyectos/{id}', [ProyectoController::class, 'show']);
Route::post('proyectos', [ProyectoController::class, 'store']);
Route::put('proyectos/{id}', [ProyectoController::class, 'update']);
Route::delete('proyectos/{id}', [ProyectoController::class, 'destroy']);
