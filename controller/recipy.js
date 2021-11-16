const Recipy = require("./../models/recipyModel")

exports.getAllRecipies = async (req, res, next) => {
  try {
    const data = await Recipy.find()

    res.status(200).json({
      data: {
        data,
      },
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.postARecipy = async (req, res, next) => {
  try {
    const data = await Recipy.create(req.body)

    res.status(200).json({
      message: "success",
      data: {
        data,
      },
    })
  } catch (error) {
    console.log(error.message)
  }
}
