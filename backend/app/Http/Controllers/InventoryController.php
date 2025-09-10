<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller // Controlador para manejar las operaciones CRUD del inventario como spring
{
    public function index() // Listar todos items del inv
    {
        return Inventory::all();
    }

    public function store(Request $request) // Crear nuevo item en el inv
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:materias_primas,productos_terminados',
            'quantity' => 'required|numeric|min:0',
            'unit' => 'required|string|max:50',
        ]); // Validaciones

        return Inventory::create($request->all());
    }

    public function update(Request $request, $id) // Actualizar item 
    {
        $inventory = Inventory::findOrFail($id);
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:materias_primas,productos_terminados',
            'quantity' => 'required|numeric|min:0',
            'unit' => 'required|string|max:50',
        ]);

        $inventory->update($request->all());
        return $inventory;
    }

    public function destroy($id) // Eliminar item
    {
        $inventory = Inventory::findOrFail($id);
        $inventory->delete();
        return response()->json(['message' => 'Item deleted']); // Respuesta json
    }
}
