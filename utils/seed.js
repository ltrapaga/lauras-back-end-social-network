const connection = require('../config/connection');
const User = require('../models/User');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.collection.insertOne({
    username: 'ltrapaga',
    email: 'ltrapaga@gmail.com',
  })
  console.log('Success');
});