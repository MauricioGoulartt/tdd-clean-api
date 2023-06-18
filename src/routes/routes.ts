import express from 'express'
import * as userController from '../controllers/userController'

const router = express.Router()

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/user', userController.getUser)

export default router
