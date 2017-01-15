const console = require('keypunch');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
if (process.env.DEBUG_MONGO) mongoose.set('debug', true);

mongoose.connection.on('connected', () => {
  console.info('Mongoose connection open');
});

mongoose.connection.on('error', (err) => {
  console.info('Mongoose connection error', err);
});

mongoose.connection.on('disconnected', () => {
  console.info('Mongoose connection disconnected');
});

mongoose.connect(process.env.MONGODB_URI);
