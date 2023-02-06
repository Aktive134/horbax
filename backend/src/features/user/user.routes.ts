import { Router } from 'express'
import userControllers from './user.controllers'

const userRouter = Router()

const { updateUserHandler } = userControllers

userRouter.put('/users/profile', updateUserHandler)

export default userRouter
