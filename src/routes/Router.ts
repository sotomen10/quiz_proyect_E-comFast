// Importa el enrutador 'Router' desde el paquete 'express'
import { Router } from 'express';

// Importa los enrutadores específicos para usuarios, productos
import { userRouter, productRouter } from './index';

// Crea una instancia del enrutador de Express
const router = Router();

// Define una ruta base para las rutas relacionadas con usuarios
// Asocia el enrutador de usuarios a la ruta '/users'
router.use('/users', userRouter);

// Define una ruta base para las rutas relacionadas con productos
// Asocia el enrutador de productos a la ruta '/products'
router.use('/products', productRouter);


// Exporta el enrutador principal para su uso en otras partes de la aplicación
export default router;
