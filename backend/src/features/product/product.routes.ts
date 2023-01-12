import { Router } from 'express';
import productController from './product.controller';

const productRouter = Router();
const {
    getProductsHandler,
    getProductHandler,
    getProductByIdHandler
} = productController;

productRouter.route('/products').get(getProductsHandler);
productRouter.route('/products/slug/:slug').get(getProductHandler);
productRouter.get('/products/:id', getProductByIdHandler);

export default productRouter;