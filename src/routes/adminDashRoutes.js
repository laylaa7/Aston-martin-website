const express = require("express")
const router = express.Router()
const adminDashController = require("../controllers/adminDashController.js")

router.get("/", adminDashController.renderAdmin)

router.get("/product", adminDashController.renderProduct)

router.get("/user", adminDashController.renderUser)


module.exports = router;