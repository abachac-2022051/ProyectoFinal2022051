'use strict'

import { Router } from "express"

import { createCreate, deletedCategory, listCategory, test, updateCategory } from "./category.controller.js"

const api = Router()

api.get('/test', test)
api.post('/create', createCreate)
api.put('/update/:id', updateCategory)
api.delete('/delete/:id', deletedCategory)
api.get('/list', listCategory)

export default api