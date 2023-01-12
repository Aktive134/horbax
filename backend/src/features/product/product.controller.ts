import { Request, Response, NextFunction } from 'express';
import ApplicationError from '../../common/error-handler/ApplicationError';
import Constant from '../../constant';
import data from '../../data';

const Messages = Constant.messages;

class productController {
    async getProductsHandler(req: Request, res: Response, next: NextFunction) {
        try {
            res.send(data.products);
        } catch (error) {
            console.log(error);
        }
    }

    async getProductHandler (req: Request, res: Response, next: NextFunction) {
        try {
            const { slug } = req.params;
            const { products } = data;
            const product = products.find((item) => item.slug === slug);
            if(product) {
                return res.send(product);
            }
            res.status(404).send({message: 'Product Not Found'});
        } catch (error) {
            console.log(error);
        }
    }
}

export default new productController();

