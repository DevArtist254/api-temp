const express = require("express")
const dotenv = require("dotenv")
dotenv.config({path: `./config.env`})
const connectDB = require("./config/db")
const cors = require("cors")

//1.0
const app = express()

//1.01
app.use(express.static("public"))

app.use(cors())

//Connect Database
connectDB()

app.listen(process.env.PORT, () => {
  console.log(`DevArtist Server is runing on port ${process.env.PORT}`)
})
