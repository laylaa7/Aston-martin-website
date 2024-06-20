const express = require("express")
const router = express.Router()
const adminDashController = require("../controllers/adminDashController.js")

router.get("/cars", adminDashController.renderAdmin)

router.get("/config/:car", adminDashController.renderProduct)

router.get("/enquire/:car", adminDashController.renderUser)