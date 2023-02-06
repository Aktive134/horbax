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
      if (!products) {
        return next(new ApplicationError(Messages.productExist))
      }
      return res.status(200).send(products)
    },
  )

  getProductCategories = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const categories = await Product.find().distinct('category')
      res.send(categories)
    },
  )

  getProductBySlugHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { slug } = req.params
      const product = await Product.findOne({ slug })
      if (!product) {
        return res.status(404).send({ message: Messages.productExist })
      }
      return res.status(200).send(product)
    },
  )

  getProductByIdHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params
      const product = await Product.findById({ _id: id })
      if (!product) {
        return res.status(404).send({ message: Messages.productExist })
      }
      return res.status(200).send(product)
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
