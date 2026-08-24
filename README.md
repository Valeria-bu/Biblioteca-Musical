# Biblioteca Musical

Una aplicación web para explorar música, buscar artistas y álbumes, y guardar tus favoritos en una biblioteca personal.

## Descripción

Biblioteca Musical es una app desarrollada con React y Vite que permite buscar contenido musical, consultar resultados desde una API externa y administrar una biblioteca personalizada con Redux Toolkit. La aplicación está pensada para practicar la gestión del estado global con slices, thunks asíncronos y configuración moderna del store.

## Funcionalidades

- Búsqueda de artistas y álbumes.
- Visualización de resultados con título, artista y álbum.
- Agregado de elementos a la biblioteca personal.
- Eliminación de elementos desde la biblioteca.
- Manejo de estados de carga y error.
- Navegación a detalles de álbum.
- Diseño visual moderno con Styled Components.

## Tecnologías

- React
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- Styled Components

## Redux Toolkit

La aplicación implementa Redux Toolkit como solución para manejar el estado global de manera más limpia y escalable.

### Conceptos utilizados

- `configureStore`
- `createSlice`
- `createAsyncThunk`

### Estructura del estado

La lógica se organiza en slices dentro de `src/redux/slices`:

- `librarySlice.js`: maneja la biblioteca del usuario.
- `searchSlice.js`: maneja la búsqueda, resultados, `loading` y `error`.

### Búsqueda asincrónica

La búsqueda se realiza mediante The Audio DB, y se gestionan los estados de la petición con `createAsyncThunk`:

- `pending`: activa `loading` y limpia errores.
- `fulfilled`: guarda los resultados obtenidos.
- `rejected`: guarda el mensaje de error.

## Instalación

1. Clona el repositorio.
2. Instala dependencias:

```bash
npm install
```

3. Ejecuta la aplicación:

```bash
npm run dev
```

4. Abre la URL local que te muestre Vite en tu navegador.

## Estructura del proyecto

```bash
src/
├── components/
│   ├── Header.jsx
│   ├── Library.jsx
│   ├── SearchBar.jsx
│   ├── SearchResults.jsx
│   ├── Song.jsx
│   └── SongDetail.jsx
├── redux/
│   ├── slices/
│   │   ├── librarySlice.js
│   │   └── searchSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
├── theme.js
├── globalStyles.js
├── hooks/
│   └── useFetch.js
└── index.css
```

## ¿Cómo funciona?

1. El usuario escribe un nombre en el buscador.
2. La app despacha una acción con `createAsyncThunk`.
3. La API responde con resultados musicales.
4. El estado global guarda los datos en `results`.
5. La app muestra estados de `loading` y `error` según el caso.
6. El usuario puede agregar o quitar elementos de su biblioteca personal.

## Repositorio

https://github.com/Valeria-bu/Biblioteca-Musical.git
