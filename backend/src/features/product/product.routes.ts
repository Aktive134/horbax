import { Router } from 'express';
import productController from './product.controller';

const productRouter = Router();
const {
    getProductsHandler,
    getProductBySlugHandler,
    getProductByIdHandler,
    getProductCategories,
    createProductHandler
} = productController;

productRouter.route('/products').get(getProductsHandler).post(createProductHandler);
productRouter.get('/products/categories', getProductCategories)
productRouter.route('/products/slug/:slug').get(getProductBySlugHandler);
productRouter.get('/products/:id', getProductByIdHandler);

export default productRouter;