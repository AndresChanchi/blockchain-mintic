# React + Vite

Este template proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

Actualmente, están disponibles dos plugins oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh

## Descripción de los Cambios en la Rama `class3Frontend`

En esta actualización de la rama `class3Frontend`, se han realizado varios cambios significativos para mejorar la integración del frontend en React con la API de blockchain. Los principales ajustes incluyen:

- **Actualización de Dependencias**: Se han modificado `package-lock.json` y `package.json`, probablemente para actualizar o agregar nuevas dependencias necesarias para la integración con la API de blockchain.

- **Modificaciones en Componentes React**:
  - `src/App.jsx`: Ajustes generales para la integración con la API.
  - `src/context/ApiContext.jsx`: Creación o actualización del contexto para manejar la comunicación con la API de blockchain.
  - `src/pages/home/home.jsx`: Adaptaciones en el componente de la página principal para reflejar los cambios en el frontend relacionados con la API.
  - `src/pages/home/home.css`: Cambios en los estilos para coincidir con las actualizaciones de la interfaz de usuario.

- **Nuevo Archivo para Fetch**:
  - `src/fetch/blockchain.jsx`: Nuevo archivo que probablemente contiene funciones para realizar peticiones a la API de blockchain.

- **Entrada del Punto de Entrada**:
  - `src/main.jsx`: Cambios para ajustar la configuración de entrada del proyecto, asegurando que el nuevo contexto y componentes se integren correctamente.

