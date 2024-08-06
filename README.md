```markdown
# Guía Completa para Configurar un Proyecto Node.js con TypeScript y MySQL

## Creación de la Estructura de Directorios y Archivos desde la Consola

```bash
# Crear directorio del proyecto
mkdir project-name
cd project-name

# Crear estructura de directorios
mkdir -p src/{config,controllers,models,repositories,routes,services}

# Crear archivos dentro de los directorios necesarios
touch src/config/{db.ts,container.ts}
touch src/controllers/{userController.ts,productController.ts}
touch src/models/{User.ts,Product.ts}
touch src/repositories/{UserRepository.ts,ProductRepository.ts}
touch src/routes/{Router.ts,UserRoutes.ts,ProductRoutes.ts}
touch src/services/{UserService.ts,ProductService.ts}
touch src/index.ts

# Crear archivo nodemon.json
touch nodemon.json

# Crear archivo tsconfig.json
touch tsconfig.json

# Crear archivo package.json (si no existe)
npm init -y
```

## Instalación de las Bibliotecas Utilizadas

### Instalación de Dependencias

```bash
# Dependencias de producción
npm install @types/express express sequelize sequelize-typescript mysql2 tsyringe --save

# Dependencias de desarrollo
npm install @types/node @types/sequelize nodemon ts-node typescript --save-dev
```

## Explicación de las Bibliotecas Utilizadas

- **express**: Framework web para Node.js que facilita la creación de aplicaciones y APIs.
- **sequelize**: ORM para Node.js que permite interactuar con bases de datos relacionales como MySQL de manera sencilla y eficiente.
- **sequelize-typescript**: Extensión de Sequelize que permite definir modelos utilizando clases de TypeScript, facilitando la integración de Sequelize con TypeScript.
- **mysql2**: Driver para MySQL en Node.js, necesario para conectar y comunicarse con una base de datos MySQL.
- **nodemon**: Herramienta que reinicia automáticamente la aplicación Node.js cuando se detectan cambios en el código fuente, útil durante el desarrollo.
- **ts-node**: Permite ejecutar archivos TypeScript directamente en Node.js sin necesidad de compilarlos previamente a JavaScript.
- **typescript**: Lenguaje de programación que añade tipado estático a JavaScript, utilizado para escribir aplicaciones más robustas y escalables.
- **tsyringe**: Contenedor de inyección de dependencias para TypeScript, que facilita la organización y mantenimiento de dependencias en aplicaciones TypeScript.
- **@types/express**: Definiciones de tipos TypeScript para Express, que proporcionan soporte para el autocompletado y validaciones de tipos en código TypeScript.
- **@types/sequelize**: Definiciones de tipos TypeScript para Sequelize, que proporcionan soporte para el autocompletado y validaciones de tipos en código TypeScript.
- **@types/node**: Definiciones de tipos TypeScript para Node.js, que proporcionan soporte para el autocompletado y validaciones de tipos en código TypeScript.

## Inicializar el Archivo de TypeScript

## Configurar Nodemon para Desarrollar

Crea un archivo `nodemon.json` en la raíz del proyecto con el siguiente contenido:

```bash
touch nodemon.json
```

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

## Agregar un Script en el `package.json` para Iniciar el Servidor con Nodemon

```json
"scripts": {
  "start": "nodemon"
}
```


## Iniciar el Servidor a Través de `index.ts`

Después de crear la conexión a la base de datos, prueba si realmente está conectada con un `try-catch`:

```typescript
import express from 'express';
import env from 'dotenv';
import sequelize from "./config/db";

const server = express();
// server.use(express.json()) // Descomentar cuando empieces a usar req
env.config();

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("¡Base de datos conectada!");
    server.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error: any) {
    console.log(`Algo salió mal desde index.ts`, error);
  }
};

startServer();
```
