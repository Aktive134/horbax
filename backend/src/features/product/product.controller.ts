import { Request, Response, NextFunction } from 'express';
import ApplicationError from '../../common/error-handler/ApplicationError';
import Constant from '../../constant';
import data from '../../data';

const Messages = Constant.messages;

class productController {
    async getProductHandler( req: Request, res: Response, next: NextFunction) {
        try {
            res.send(data.products);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new productController();

