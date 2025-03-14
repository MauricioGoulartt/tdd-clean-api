import request from 'supertest'
import { app, server } from '../app'
import * as userService from '../services/userService'
import { ValidationError } from '../helpers/validatorError'

jest.mock('../services/userService')

describe('POST /signup', () => {
  it('should create a new user and return 200 status code', async () => {
    (userService.signup as jest.Mock).mockResolvedValueOnce({
      id: '123',
      created_at: new Date(),
      modified_at: new Date()
    })

    const response = await request(app)
      .post('/signup')
      .send({
        name: 'John',
        undername: 'Doe',
        gender: 'Male',
        email: 'john@example.com',
        password: 'password'
      })

    expect(response.statusCode).toBe(200)
    expect(response.body.id).toBeTruthy()
    expect(response.body.created_at).toBeTruthy()
    expect(response.body.modified_at).toBeTruthy()
  })

  it('should return 400 status code when a field is missing', async () => {
    (userService.signup as jest.Mock).mockImplementationOnce(() => {
      throw new Error('Field missing')
    })

    const response = await request(app)
      .post('/signup')
      .send({
        email: 'john@example.com'
      })

    expect(response.statusCode).toBe(400)
  })

  it('should return 500 status code when server error occurs', async () => {
    (userService.signup as jest.Mock).mockRejectedValueOnce(new ValidationError('Server error'))

    const response = await request(app)
      .post('/signup')
      .send({
        name: 'John',
        undername: 'Doe',
        gender: 'Male',
        email: 'john@example.com',
        password: 'password'
      })

    expect(response.statusCode).toBe(500)
  }, 10000)

  afterAll((done) => {
    server.close(() => {
      setTimeout(done, 500)
    })
  })
})
