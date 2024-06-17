var express = require("express")
var cors = require('cors')
const path = require("path")

var app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

//load routes
const modelsRoutes = require('./src/routes/modelsRoutes')
const testdriveRoutes = require('./src/routes/testdriveRoutes')


app.use('/models', modelsRoutes)
app.use('/testdrive2', testdriveRoutes)

app.get('/testdrive2', (req, res) => {
    console.log("Accessing /testdrive2");
    res.sendFile(path.join(__dirname, './src/views/testdrive2.html'));
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))

    
})

app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  })