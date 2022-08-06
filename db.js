/****************************
 * CONFIGURE MONGODB DATABASE *
 ****************************/
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
    "mongodb://mongo:27017/docker-node-mongo",
    connectionParams
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`error when connecting to mongodb: ${err}`);
  }
};
