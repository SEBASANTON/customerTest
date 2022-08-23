const express = require('express');

//Controllers
const {
  getAllClient,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} = require('../controllers/clients.controller');

//Middleware
const { clientExists } = require('../middlewares/clients.middleware');
const {
  createClientValidators,
} = require('../middlewares/validators.middlewares');

const router = express.Router();

router.get('/', getAllClient);

router.post('/registro', createClientValidators, createClient);

router
  .use('/:id', clientExists)
  .route('/:id')
  .get(getClientById)
  .patch(updateClient)
  .delete(deleteClient);

module.exports = { clientsRouter: router };
