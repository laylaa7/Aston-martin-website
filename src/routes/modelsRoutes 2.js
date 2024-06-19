const express = require("express")
const router = express.Router()
const modelsController = require("../controllers/modelsController")
const path = require("path")

router.get("/cars", modelsController.render)

router.get("/config/:car", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/config.html'))
})

router.get("/api/car/:car", modelsController.getCar)

module.exports = router