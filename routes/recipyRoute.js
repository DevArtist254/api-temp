const express = require("express")
const {getAllRecipies, postARecipy} = require("./../controller/recipy")

//set up route
const router = express.Router()

router.get("/getAllRecipy", getAllRecipies)
router.post("/postARecipy", postARecipy)

//export route
module.exports = router
