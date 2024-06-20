var express = require("express")
var cors = require('cors')
const path = require("path")

var app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

//load routes
const modelsRoutes = require('./src/routes/modelsRoutes')
// const adminRoutes = 


app.use('/models', modelsRoutes)
// app.use('/admin')

app.get("/src/views/popularModelVantage.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/popularModelVantage.html'))
  })

  app.get("/src/views/popularModelDBS.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/popularModelDBS.html'))
  })

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})



app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  })