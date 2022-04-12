import express from 'express'

const routes = express.Router()

import * as Controller from './controllers/ActorController'

routes.get('/test', Controller.ActorController.index)

routes.get('/actor/name', Controller.ActorController.show)

//routes.get('/users/search/name', Controller.userController.showName)

//routes.put('/users', Controller.userController.update)

export default routes;