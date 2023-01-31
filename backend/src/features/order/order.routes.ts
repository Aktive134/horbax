import { Router } from 'express'
import orderController from './order.controller'

const { createProductHandler } = orderController

const orderRouter = Router()

orderRouter.route("/orders").post(createProductHandler);


export default orderRouter