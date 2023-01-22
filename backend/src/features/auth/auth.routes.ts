import { Router } from 'express'
import authController from './auth.controller'

const { signUpHandler, loginHandler } = authController

const authRouter = Router()

authRouter.post('/sign-up', signUpHandler)
authRouter.post('/signin', loginHandler)

export default authRouter
