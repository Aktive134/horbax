import { Router } from 'express'
import orderController from './order.controller'

const { createProductHandler, getOrderByIdHandler } = orderController

const orderRouter = Router()

orderRouter.route("/orders").post(createProductHandler);
orderRouter.route("/orders/:id").get(getOrderByIdHandler);


export default orderRouter