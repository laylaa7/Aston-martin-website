const express = require("express")
const router = express.Router()
const modelsController = require("../controllers/modelsController")


router.get("/cars", modelsController.renderModel)

router.get("/config/:car", modelsController.renderConfig)

router.get("/enquire/:car", modelsController.renderEnquire)



module.exports = router