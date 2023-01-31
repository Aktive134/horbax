import { Request, Response, NextFunction } from 'express'
import catchAsync from '../../common/error-handler/CatchAsyncError'
import Constant from '../../constant'
import Order from './order.model'

const Messages = Constant.messages

class orderController {
  createProductHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { payload } = res.locals

      const newOrder = new Order({
        orderItems: req.body.orderItems.map((x: any) => ({
          ...x,
          product: x._id,
        })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: payload._id,
      })
      const order = await newOrder.save()
      res.status(201).send({ message: Messages.orderCreated, order })
    },
  )
  getOrderByIdHandler = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const order = await Order.findById(id);
    if(order) {
      res.send(order);
    } else {
      res.status(404).send({ message: Messages.orderExist})
    }
  })
}

export default new orderController()
