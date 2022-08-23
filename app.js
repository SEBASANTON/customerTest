const express = require('express');
const cors = require('cors');

//Controllers
const { globalErrorHandler } = require('./controllers/errors.controller');

//Routers
const { clientsRouter } = require('./routes/clients.routes');

const app = express();

app.use(cors());

//Enable incoming JSON data
app.use(express.json());

//Endpoints
app.use('/api/v1/clients', clientsRouter);

app.use(globalErrorHandler);

module.exports = { app };
