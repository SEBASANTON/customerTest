const { Client } = require('../models/client.model');

//Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const clientExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const client = await Client.findOne({
    where: { id, status: 'active' },
  });

  if (!client) {
    return next(
      new AppError('Client does not exist with given Id or is disabled', 404)
    );
  }
  req.client = client;
  next();
});
module.exports = { clientExists };
