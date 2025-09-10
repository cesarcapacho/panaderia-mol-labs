<?php

use Illuminate\Support\Facades\Route; // Rutas API para el inventario
use App\Http\Controllers\InventoryController; // Importar el controlador 

Route::get('/inventories', [InventoryController::class, 'index']);
Route::post('/inventories', [InventoryController::class, 'store']);
Route::put('/inventories/{id}', [InventoryController::class, 'update']);
Route::delete('/inventories/{id}', [InventoryController::class, 'destroy']);// Rutas CRUD
