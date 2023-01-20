import { Request, Response, NextFunction } from 'express'
import ApplicationError from '../../common/error-handler/ApplicationError'
import Constant from '../../constant'
import data from '../../data'
import Product from './product.model'

const Messages = Constant.messages

class productController {
  async getProductsHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Product.find({})
      res.status(200).send(products)
    } catch (error: any) {
      return next(new ApplicationError(error.message))
    }
  }

  async getProductBySlugHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { slug } = req.params
      const product = await Product.findOne({ slug })
      if (product) {
        return res.status(200).send(product)
      }
      res.status(404).send({ message: 'Product Not Found' })
    } catch (error: any) {
      return next(new ApplicationError(error.message))
    }
  }
  async getProductByIdHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const product = await Product.findById({ _id: id })
      if (product) {
        return res.send(product)
      }
      res.status(404).send({ message: 'Product Not Found' })
    } catch (error: any) {
      console.log(error)
    }
  }
  async createProductHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const product = new Product(req.body)
      await product.save()
      res.status(201).send(product)
    } catch (error: any) {
      return next(new ApplicationError(error.message))
    }
  }
}

export default new productController()
