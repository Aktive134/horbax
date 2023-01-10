import { Router } from 'express';
import productController from './product.controller';

const productRouter = Router();
const {
    getProductHandler
} = productController;

productRouter.get('/products', getProductHandler);

export default productRouter;