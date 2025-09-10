## Mol Labs - Sistema de Gestión de Inventarios

Hola equipo de Mol Labs. Gracias por la oportunidad de demostrar mis habilidades. Estoy entusiasmado por unirme a su equipo y contribuir con mi pasión por el desarrollo. Este proyecto es un MVP para la gestión de inventarios en una panadería, desarrollado como parte de la prueba técnica.

## Descripción del Proyecto

Este sistema permite gestionar inventarios de materias primas y productos terminados mediante una API REST en Laravel y una interfaz en React. Características: Backend con API REST en Laravel para operaciones CRUD de inventarios. Frontend con interfaz en React, formularios validados y tablas CRUD. Diseño simple y funcional con Bootstrap y validaciones en frontend y backend. Base de datos con tabla unificada inventories en MySQL, diferenciada por el campo type. El proyecto es un MVP funcional, con diseño claro, estructura organizada y cumplimiento de los requisitos de la prueba técnica.

## Tecnologías Utilizadas
Backend: Laravel (PHP)
Frontend: React, Axios, Bootstrap
Base de datos: MySQL
Herramientas: Composer, Node.js, npm, Git

## Carpeta docs

Contiene los artefactos de análisis y diseño: historias-usuario.md con historias de usuario (consultar, agregar, editar, eliminar ítems). casos-uso.png con diagrama de casos de uso con el actor Usuario y acciones CRUD. diagrama-clase.png o diagrama-clase.puml con diagrama UML de clases (Inventory, InventoryController). erd.png o erd.sql con diagrama ERD de la tabla inventories (incluye created_at y updated_at). diseno.md con reglas de negocio, visión del MVP y descripción general.

## Requisitos
PHP >= 8.1
Composer
Node.js >= 18.x
npm >= 9.x
MySQL (ej. XAMPP o similar)
Git
Navegador web (ej. Chrome)

## Instalación y Ejecución
>Clonar el repositorio: git clone https://github.com/tu-usuario/panaderia-mol-labs.git

>>cd panaderia-mol-labs

>>Backend (Laravel): cd backend && composer install && cp .env.example .env. 

>>Editar el archivo .env: DB_CONNECTION=mysql DB_HOST=127.0.0.1 DB_PORT=3306 DB_DATABASE=panaderia_mol_labs DB_USERNAME=root DB_PASSWORD=. 

>>Luego: php artisan key:generate && php artisan migrate && php artisan serve --port=8000

>>Frontend (React): cd ../frontend && npm install && npm start. Abrir en el navegador: http://localhost:3000


## Estructura del Proyecto

backend/ → Código Laravel (modelos, controladores, rutas)
frontend/ → Código React (componentes, Axios, Bootstrap)
docs/ → Diagramas y documentación conceptual
README.md → Este archivo

## Agradecimientos

Gracias al equipo de Mol Labs por esta oportunidad. Disfruté desarrollar este MVP, aplicando buenas prácticas y creatividad.

**Autor:** Cesar Capacho
**Fecha:** 10 de septiembre de 2025


