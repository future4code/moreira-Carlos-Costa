import express from 'express'

const routes = express.Router()

import * as Controller from './controllers/UserController'

routes.post('/users', Controller.userController.store)
routes.get('/users', Controller.userController.index)
routes.get('/users/search/cpf', Controller.userController.show)
routes.put('/users/saldo', Controller.userController.update)

export default routes;
