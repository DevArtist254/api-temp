const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    //returns promise to connect to the database with two params mongoURI and mongoose obj *check website for changes
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("mongoDB connected....")
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
