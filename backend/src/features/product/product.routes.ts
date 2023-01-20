import { Router } from 'express';
import productController from './product.controller';

const productRouter = Router();
const {
    getProductsHandler,
    getProductBySlugHandler,
    getProductByIdHandler,
    createProductHandler
} = productController;

productRouter.route('/products').get(getProductsHandler).post(createProductHandler);
productRouter.route('/products/slug/:slug').get(getProductBySlugHandler);
productRouter.get('/products/:id', getProductByIdHandler);

export default productRouter;