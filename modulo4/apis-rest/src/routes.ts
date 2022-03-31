import express from 'express'

const routes = express.Router()

import * as Controller from './controllers/UserController'

routes.get('/users', Controller.userController.index)

routes.get('/users/search', Controller.userController.show)
routes.get('/users/search/name', Controller.userController.showName)
routes.put('/users', Controller.userController.update)

export default routes;