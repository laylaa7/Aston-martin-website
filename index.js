var express = require("express")
var cors = require('cors')
const path = require("path")

var app = express()

const mongoose= require('mongoose');
const dbURI='mongodb+srv://dbUser:dbUserPassword@car-aston-martin.kii8rpt.mongodb.net/';
mongoose.connect(dbURI).then(result=>app.listen(8080)).catch(err=>console.log(err));

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

//load routes
const modelsRoutes = require('./src/routes/modelsRoutes')

app.use('/models', modelsRoutes)


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})
app.get("/src/views/testdrive.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/testdrive.html'))
})
app.get("/src/views/reservation.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/reservation.html'))
})
app.get("/src/views/admin_User_dashboard.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/admin_User_dashboard.html'))
})
app.get("/src/views/historyusers.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/historyusers.html'))
})
app.get("/src/views/adminLandingPage.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/adminLandingPage.html'))
})


app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
})