const mongoose = require('mongoose');

async function connect() {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@localizalar.icfjg5c.mongodb.net/localiza?retryWrites=true&w=majority`;

    await mongoose.connect(uri, {
      dbName: 'localiza'
    });

    console.log(mongoose.connection.db.databaseName);
    console.log('MongoDB connected');

  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = connect;