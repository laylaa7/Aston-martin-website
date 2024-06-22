const express = require('express')
const path = require('path')
var cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config();

const userController = require('./src/controllers/userController');
const reservationController = require('./src/controllers/reservationController');
const testDriveController = require('./src/controllers/testDriveController');

const mongoose = require('mongoose')
const User = require('./src/models/userModel');
const Reservation=require('./src/models/reservationModel');
const testDrive=require('./src/models/testDriveModel');

const app = express()

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

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/reservationHistory', async (req, res) => {
  try {
    const reservations = await Reservation.find({}).sort({ createdAt: -1 }); 
    res.render('reservationHistory', { reservations: reservations });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}); 
app.get('/testdriveHistory', async (req, res) => {
  try {
    const testDrives = await testDrive.find({}).sort({ createdAt: -1 }); 
    res.render('testdriveHistory', { testDrives: testDrives });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}); 


app.get('/userHistory', async (req, res) => {
  try {
      const users = await User.find({}).sort({ createdAt: -1 });
      res.render('userHistory', { users: users });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// load routes
// const modelsRoutes = require('./src/routes/modelsRoutes');
// app.use('/models', modelsRoutes);

const userRoutes = require('./src/routes/userRoutes'); 
app.use('/views', userRoutes);

const reservationRoutes = require('./src/routes/reservationRoutes'); 
app.use('/', reservationRoutes);

const testDriveRoutes = require('./src/routes/testDriveRoutes'); 
app.use('/', testDriveRoutes);

app.post("/login", userController.login); 
app.post("/views/signup", userController.signup); 
app.post("/views/verify-otp", userController.verifyOtp); 

app.post('/reservation', reservationController.saveReservation); 

app.post('/testDrive', testDriveController.savetestDrive)

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})
app.get("/src/views/testdrive.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/testdrive.html'))
})
app.get("/src/views/enquire.html", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/views/enquire.html'))
})
app.get("/src/views/adminLandingPage.html", (req,res) => {
  res.sendFile(path.join(__dirname, 'src/views/adminLandingPage.html'))
})


// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'src/views'));

app.get('/reservationHistory', (req, res) => {
    res.render('reservationHistory');
});
app.get('/userHistory', (req,res) => {
    res.render('userHistory');
});
app.get('/testdriveHistory', (req,res) => {
  res.render('testdriveHistory');
});


app.use(express.static(path.join(__dirname, 'public')));


















// app.listen(8080, function () {
//     console.log('Server is running on port 8080')
// })

