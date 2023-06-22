import express from 'express'
import * as userController from '../controllers/userController'

const router = express.Router()

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/user', userController.getUser)

export default router
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               undername:
 *                 type: string
 *               gender:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - gender
 *               - email
 *               - password
 *             example:
 *               name: João da Silva
 *               undername: jsilva
 *               gender: masculino
 *               email: jsilva@email.com
 *               password: senha123
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                 modified_at:
 *                   type: string
 *       400:
 *         description: Dados inválidos enviados no corpo da requisição
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Autentica um usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *             example:
 *               email: jsilva@email.com
 *               password: senha123
 *     responses:
 *       200:
 *         description: Usuário autenticado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retorna informações do usuário autenticado
 *     tags: [User]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Dados do usuário retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 id:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                 modified_at:
 *                   type: string
 *       401:
 *         description: Token de autenticação inválido ou não fornecido
 *       500:
 *         description: Erro interno do servidor
 */
