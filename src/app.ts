import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { json, urlencoded } from 'body-parser'
import router from './routes/routes'

dotenv.config()

export const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

mongoose
  .connect(process.env.MONGO_URI, {
    w: 'majority' // majority write concern
  })
  .then(() => console.log('Mongo Connected!'))
  .catch((err) => console.log(err))

app.use('/', router)

const PORT = process.env.PORT || 3000

export const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
