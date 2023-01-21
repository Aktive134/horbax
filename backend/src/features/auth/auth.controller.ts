import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import User from '../user/user.model'
import Constant from '../../constant'
import Configuration from '../../config'
import catchAsync from '../../common/error-handler/CatchAsyncError'
import ApplicationError from '../../common/error-handler/ApplicationError'
import BadRequestError from '../../common/error-handler/BadRequestError'
import NotAuthorizeError from '../../common/error-handler/NotAuthorizedError'

const Messages = Constant.messages

class AuthController {
  signUpHandler = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name, email, password, isAdmin } = req.body
      const data = {
        name,
        email,
        password,
        isAdmin,
      }
      const newUser = new User(data)
      const salt = await bcrypt.genSalt(Configuration.saltFactor)
      const hashPassword = await bcrypt.hash(data.password, salt)
      newUser.password = hashPassword

      const user = await newUser.save()
      res.status(201).send({ user })
    },
  )
}

export default new AuthController()
