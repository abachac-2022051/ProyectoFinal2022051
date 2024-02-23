'use strict'

import express from 'express'
import { test, register, login, update, deleteU } from './user.controller.js'
import { validateJwt } from '../middlewares/validate-jwt.js'

const api = express.Router()

api.get('/test', test)
api.put('/update/:id', [validateJwt], update)
api.delete('/delete/:id', [validateJwt], deleteU)


api.post('/register', register)
api.post('/login', login)


export default api