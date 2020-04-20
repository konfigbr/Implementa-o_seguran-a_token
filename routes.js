const express = require('express')
const UserController = require('./src/controllers/UserController')
const GatosController = require('./src/controllers/GatosController')
const routes = express.Router();
const auth = require('./src/middlewares/auth');

routes.post('/login',UserController.create);

routes.get('/logout', UserController.logout);

routes.get('/gatos', auth.verifyToken,GatosController.create);

module.exports = routes;