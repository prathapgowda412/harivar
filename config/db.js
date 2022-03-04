const mongoose = require('mongoose');
require('dotenv').config();

const mongourl =
  'mongodb+srv://prathap:prathapgowda6@cluster0.b8ykq.mongodb.net/harivara?retryWrites=true&w=majority';

const initializeMongo = async () => {
  try {
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
    });
    console.log('connected to mongoDB ');
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = initializeMongo;
