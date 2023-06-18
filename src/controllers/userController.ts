import express from 'express'
import * as userService from '../services/userService'
import { ValidationError } from '../helpers/validatorError'

export async function signup (req: express.Request, res: express.Response) {
  try {
    const user = await userService.signup(req.body)
    res.status(200).json(user)
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(500).json({ message: 'Server error' })
    } else {
      res.status(400).json({ message: err.message })
    }
  }
}

export async function signin (req: express.Request, res: express.Response) {
  try {
    const token = await userService.signin(req.body)
    res.status(200).json({ token })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export async function getUser (req: express.Request, res: express.Response) {
  try {
    const user = await userService.getUser(req.headers.authorization)
    res.status(200).json(user)
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' })
  }
}
