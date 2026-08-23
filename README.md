# Biblioteca Musical

Aplicación web desarrollada con React y Vite para gestionar una biblioteca musical. La aplicación permite visualizar canciones y administrar una biblioteca personalizada utilizando Redux para manejar el estado global.

## Características

- Encabezado de la aplicación.
- Visualización de canciones con título, artista, álbum y duración.
- Búsqueda y visualización de resultados musicales.
- Agregar canciones a la biblioteca personalizada.
- Eliminar canciones de la biblioteca.
- Gestión del estado global mediante Redux.
- Componentes reutilizables de React.
- Diseño visual adaptado a la aplicación.

## Tecnologías

- React
- Vite
- JavaScript
- Redux
- React Redux
- Styled Components

## Redux

La aplicación utiliza Redux para administrar el estado global de la biblioteca musical.

La estructura de Redux se encuentra dentro de:

src/redux/

Incluye:

- store.js: configura el store global de Redux.
- libraryReducer.js: administra el estado de la biblioteca.
- libraryActions.js: contiene las acciones para agregar y eliminar canciones.

### Acciones disponibles

- ADD_SONG: agrega una canción a la biblioteca.
- REMOVE_SONG: elimina una canción mediante su ID.

Los componentes SearchResults y Library utilizan useDispatch y useSelector de React Redux para interactuar con el estado global.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias:

npm install

3. Inicia la aplicación:

npm run dev

4. Abre en el navegador la URL proporcionada por Vite.

## Estructura principal

src/
├── components/
│   ├── Header/
│   ├── Library/
│   ├── SearchResults/
│   └── Song/
├── redux/
│   ├── libraryActions.js
│   ├── libraryReducer.js
│   └── store.js
├── App.jsx
└── main.jsx

## Funcionamiento

El usuario puede seleccionar una canción desde los resultados de búsqueda y agregarla a su biblioteca.

Cuando se agrega una canción, SearchResults utiliza dispatch para enviar la acción ADD_SONG al store de Redux.

El componente Library utiliza useSelector para obtener las canciones almacenadas y permite eliminarlas mediante la acción REMOVE_SONG.

## Repositorio

https://github.com/Valeria-bu/Biblioteca-Musical.git
