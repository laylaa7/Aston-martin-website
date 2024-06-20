const express = require('express')
const path = require('path')
var cors = require('cors')
const bodyParser = require('body-parser');
const userController = require('./src/controllers/userController');
const testDriveController = require('./src/controllers/testDriveController');
require('dotenv').config();

const mongoose = require('mongoose')
const User = require('./src/models/userModel');
// const Testdrive=require('./src/models/database')

const app = express()
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbURI = 'mongodb+srv://nourB:nour54321@car-aston-martin.kii8rpt.mongodb.net/?retryWrites=true&w=majority&appName=car-aston-martin';

mongoose.connect(dbURI)
  .then(result => {
    console.log("Connected to MongoDB");
    app.listen(8080, () => {
      console.log('Server is running on port 8080');
    });
  })
  .catch(err => console.log(err));


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/historyusers', async(req, res) => {
  // Retrieve users data from your database 
  const users = await User.find({}).sort({ createdAt: -1 }); 

  res.render('historyusers', { users: users });
});

// load routes
const modelsRoutes = require('./src/routes/modelsRoutes');
app.use('/models', modelsRoutes)

// const userRoutes = require('./src/routes/userRoutes');
// app.use('/views', userRoutes);

app.post("/api/user/signup",userController.signup)
app.post("/api/user/verify-otp",userController.verifyOtp)


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
app.get("/src/views/adminLandingPage.html", (req,res) => {
  res.sendFile(path.join(__dirname, 'src/views/adminLandingPage.html'))
})


// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'src/views'));

app.get('/historyusers', (req, res) => {
    res.render('historyusers');
});

app.get('/testdrive', (req, res) => {
  res.render('testdrive');
});

app.use(express.static(path.join(__dirname, 'public')));



//testDrive database
// app.post('/testDriveHistory', testDriveController.saveTestDrive);














// app.listen(8080, function () {
//     console.log('Server is running on port 8080')
// })

