const { app } = require('./app');

//Utils
const { db } = require('./utils/database');

//Database authenticated
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

//Database synced
db.sync(/* { force: true } */)
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

//Spin up server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
