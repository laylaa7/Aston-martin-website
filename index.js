var express = require("express")
var cors = require('cors')
const path = require("path")
var app = express()


app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//api





const dialogflowConfig = {
  credentials: {
    client_email: 'YOUR_CLIENT_EMAIL',
    private_key: 'YOUR_PRIVATE_KEY',
  },
  project_id: 'YOUR_PROJECT_ID',
};
//load routes
const modelsRoutes = require('./src/routes/modelsRoutes')
const adminDashRoutes = require('./src/routes/adminDashRoutes')



app.use('/models', modelsRoutes)
app.use('/admin' , adminDashRoutes)

app.get("/src/views/popularModelVantage.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/popularModelVantage.html'))
  })

app.get("/src/views/popularModelDBS.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/popularModelDBS.html'))
  })

app.get("/src/views/testdrive.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/testdrive.html'))
  })

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})



app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  })