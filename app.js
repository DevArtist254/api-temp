const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
dotenv.config({path: `./config.env`})
const connectDB = require("./config/db")
const cors = require("cors")

//1.0
const app = express()

//1.01
//set json script in the body
app.use(express.json({limit: "10kb"}))

app.use(cors())

//Connect Database
connectDB()

app.use(express.static(path.join(__dirname, "client", "public")))

//set the CRUD main route
const recipyRoute = require("./routes/recipyRoute")

//user route
app.use("/cookbook/recipy", recipyRoute)

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.listen(process.env.PORT, () => {
  console.log(`DevArtist Server is runing on port ${process.env.PORT}`)
})
