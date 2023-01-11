import { Router } from 'express';
import productController from './product.controller';

const productRouter = Router();
const {
    getProductsHandler,
    getProductHandler
} = productController;

productRouter.route('/products').get(getProductsHandler);
productRouter.route('/products/:slug').get(getProductHandler);

export default productRouter;