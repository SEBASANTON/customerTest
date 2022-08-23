//Models
const { Client } = require('../models/client.model');

//Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllClient = catchAsync(async (req, res, next) => {
  const clients = await Client.findAll({
    where: { status: 'active' },
  });
  res.status(200).json({
    status: 'success',
    clients,
  });
});

const createClient = catchAsync(async (req, res, next) => {
  const { fname, lname, address, birthdate } = req.body;

  const newClient = await Client.create({
    fname,
    lname,
    address,
    birthdate,
  });

  res.status(201).json({
    status: 'success',
    newClient,
  });
});

const getClientById = catchAsync(async (req, res, next) => {
  const { client } = req;
  res.status(200).json({
    status: 'success',
    client,
  });
});

const updateClient = catchAsync(async (req, res, next) => {
  const { client } = req;
  const { fname, lname, address, birthdate } = req.body;

  await client.update({ fname, lname, address, birthdate });

  res.status(204).json({
    status: 'success',
  });
});

const deleteClient = catchAsync(async (req, res, next) => {
  const { client } = req;

  await client.update({ status: 'disabled' });

  res.status(204).json({
    status: 'success',
  });
});

module.exports = {
  getAllClient,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
};
