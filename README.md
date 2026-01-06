# Pokédex Explorer - Fase 1

Aplicación moderna de Pokédex construida con React, TypeScript y Redux Toolkit.

## Autor
- **Daniel García**

## Stack Técnico
- **Frontend:** React 19
- **Estado Global:** Redux Toolkit (RTK)
- **Consumo de API:** RTK Query (con sistema de caché automático)
- **Estilos:** CSS3 (Flexbox y Grid Responsivo)
- **Tipado:** TypeScript

## Funcionalidades Clave
- **Búsqueda Global:** Permite buscar Pokémon por nombre con lógica de "skip" para optimizar llamadas a la API.
- **Paginación Dinámica:** Gestión de offset y límites para una navegación fluida entre páginas.
- **Vista de Detalle:** Componente dedicado para visualizar estadísticas, tipos y medidas de cada Pokémon.
- **Caché Inteligente:** La navegación entre la lista y los detalles es instantánea gracias a la capa de caché de Redux.
- **Diseño Responsivo:** Grid de 3 columnas en escritorio que se adapta a dispositivos móviles automáticamente.

## Configuración del Entorno Local

Para garantizar el correcto funcionamiento del proyecto, siga estos pasos detallados:

### 1. Requisitos Previos
* **Node.js:** v16.x o superior (se recomienda v18 LTS o superior).
* **Gestor de paquetes:** `npm` v8.x o superior.
* **Navegador:** Compatible con ES6+ (Chrome, Firefox, Edge, Safari).

### 2. Instalación
Clone el repositorio y acceda al directorio raíz:
```bash
git clone https://github.com/CookieMaster2/prueba-tecnica-1.git
cd prueba-tecnica-1
```
Instale las dependencias necesarias
```
npm install
```

Esto instalará paquetes clave como @reduxjs/toolkit, react-redux y las definiciones de tipos para TypeScript.

### 3. Ejecución en modo "Desarrollo"

Para levantar el servidor de desarrollo con Vite: 

```
npm run dev
```

Por defecto, la aplicación se servirá en ```http://localhost:5173```. Vite permite HMR (Hot Module Replacement), por lo que cualquier cambio en el código se reflejará instantáneamente sin perder el estado de la aplicación.

### 4. Compilación para "Producción"

Para generar un bundle optimizado y minificado ejecute el comando

```
npm run build
```

Los archivos resultantes se ubicarán en la carpeta ```/dist```. Estos archivos están listos para ser desplegados en servicios como Vercel, Netlify o GitHub Pages.
