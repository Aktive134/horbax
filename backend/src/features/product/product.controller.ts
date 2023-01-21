import { Request, Response, NextFunction } from 'express'
import ApplicationError from '../../common/error-handler/ApplicationError'
import catchAsync from '../../common/error-handler/CatchAsyncError'
import Constant from '../../constant'
import Product from './product.model'

const Messages = Constant.messages

class productController {
  getProductsHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const products = await Product.find({})
      res.status(200).send(products)
      return next(new ApplicationError(Messages.productExist))
    },
  )

  getProductBySlugHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { slug } = req.params
      const product = await Product.findOne({ slug })
      if (product) {
        return res.status(200).send(product)
      }
      res.status(404).send({ message: 'Product Not Found' })
    },
  )

  getProductByIdHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params
      const product = await Product.findById({ _id: id })
      if (product) {
        return res.send(product)
      }
      res.status(404).send({ message: 'Product Not Found' })
    },
  )
  createProductHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const product = new Product(req.body)
      await product.save()
      res.status(201).send(product)
    },
  )
}

export default new productController()
