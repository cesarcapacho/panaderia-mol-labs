# Casos de Uso - Panaderia Mol Labs

## Actores

- **Empleado de Panadería**: Usuario principal del sistema que gestiona los inventarios de la Panaderia.

## Casos de Uso

### Gestión de Productos Terminados

1. **Visualizar Productos Terminados**

   - Actor: Empleado de Panadería
   - Descripción: Ver lista de todos los productos terminados con sus cantidades
   - Precondiciones: El sistema debe estar funcionando
   - Flujo Principal:
     1. El empleado accede al módulo de productos terminados
     2. El sistema muestra la lista de productos
     3. El empleado puede ver nombres, cantidades y fechas de actualización

2. **Agregar Producto Terminado**

   - Actor: Empleado de Panadería
   - Descripción: Registrar un nuevo producto terminado en el inventario
   - Precondiciones: El empleado debe tener permisos para agregar productos
   - Flujo Principal:
     1. El empleado selecciona "Agregar Producto"
     2. Completa el formulario con nombre y cantidad
     3. El sistema valida los datos
     4. El producto se guarda en el inventario

3. **Actualizar Producto Terminado**

   - Actor: Empleado de Panadería
   - Descripción: Modificar la cantidad de un producto existente
   - Precondiciones: Debe existir al menos un producto en el inventario
   - Flujo Principal:
     1. El empleado selecciona un producto de la lista
     2. Modifica la cantidad
     3. El sistema valida que la cantidad no sea negativa
     4. Se actualiza el inventario

4. **Eliminar Producto Terminado**
   - Actor: Empleado de Panadería
   - Descripción: Remover un producto del inventario
   - Precondiciones: Debe existir al menos un producto en el inventario
   - Flujo Principal:
     1. El empleado selecciona un producto para eliminar
     2. El sistema solicita confirmación
     3. El empleado confirma la eliminación
     4. El producto se remueve del inventario

### Gestión de Materias Primas

5. **Visualizar Materias Primas**

   - Actor: Empleado de Panadería
   - Descripción: Ver lista de todas las materias primas con sus cantidades
   - Precondiciones: El sistema debe estar funcionando
   - Flujo Principal:
     1. El empleado accede al módulo de materias primas
     2. El sistema muestra la lista de materias primas
     3. El empleado puede ver nombres, cantidades, unidades y fechas

6. **Agregar Materia Prima**

   - Actor: Empleado de Panadería
   - Descripción: Registrar una nueva materia prima en el inventario
   - Precondiciones: El empleado debe tener permisos para agregar materias primas
   - Flujo Principal:
     1. El empleado selecciona "Agregar Materia Prima"
     2. Completa el formulario con nombre, cantidad y unidad
     3. El sistema valida los datos
     4. La materia prima se guarda en el inventario

7. **Actualizar Materia Prima**

   - Actor: Empleado de Panadería
   - Descripción: Modificar la cantidad de una materia prima existente
   - Precondiciones: Debe existir al menos una materia prima en el inventario
   - Flujo Principal:
     1. El empleado selecciona una materia prima de la lista
     2. Modifica la cantidad
     3. El sistema valida que la cantidad no sea negativa
     4. Se actualiza el inventario

8. **Eliminar Materia Prima**
   - Actor: Empleado de Panadería
   - Descripción: Remover una materia prima del inventario
   - Precondiciones: Debe existir al menos una materia prima en el inventario
   - Flujo Principal:
     1. El empleado selecciona una materia prima para eliminar
     2. El sistema solicita confirmación
     3. El empleado confirma la eliminación
     4. La materia prima se remueve del inventario
