<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->enum('type', ['materias_primas', 'productos_terminados']);
            $table->float('quantity')->default(0.0);
            $table->string('unit', 50);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}

/*$table->id() crea id INTEGER AUTO_INCREMENT PRIMARY KEY. como workbench
$table->string('name', 255) es para VARCHAR(255).
$table->enum(...) coincide ENUM.
$table->float('quantity') decimales.
$table->timestamps() agrega created_at y updated_at. para los tiempos*/