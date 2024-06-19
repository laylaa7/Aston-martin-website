var express = require("express")
var cors = require('cors')
const path = require("path")

var app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

//load routes
const modelsRoutes = require('./src/routes/modelsRoutes')

app.use('/models', modelsRoutes)

app.get("src/views/models.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/models.html'))
})

app.get("/src/views/reservation.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/reservation.html'))
})

app.get("/src/views/testDrive.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/testDrive.html'))
})

app.get("/src/views/model1.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/model1.html'))
})

app.get("/src/views/model2.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/model2.html'))
})

app.get("/src/views/userHistory.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/userHistory.html'))
})

app.get("/src/views/adminDashProduct.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/adminDashProduct.html'))
})

app.get("/src/views/adminDashUser.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/adminDashUser.html'))
})

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  })