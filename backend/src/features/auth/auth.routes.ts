import { Router } from 'express'
import authController from './auth.controller'

const { signUpHandler } = authController

const authRouter = Router()

authRouter.post('/sign-up', signUpHandler)

export default authRouter
