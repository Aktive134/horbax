import { Router } from 'express'
import orderController from './order.controller'

const { createProductHandler, getOrderByIdHandler, updateOrderHandler, getOrderMineHandler } = orderController

const orderRouter = Router()

orderRouter.route("/orders").post(createProductHandler);
orderRouter.route("/orders/mine").get(getOrderMineHandler);
orderRouter.route("/orders/:id").get(getOrderByIdHandler);
orderRouter.route("/orders/:id/pay").put(updateOrderHandler);


export default orderRouter