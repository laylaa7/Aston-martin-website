var express = require("express")
var cors = require('cors')
const path = require("path")
var app = express()
const bodyParser = require('body-parser');
const session = require("express-session");



require('dotenv').config();
const mongoose = require('mongoose');
const carRoutes = require('./src/routes/carRoutes');
const userController = require('./src/controllers/userController');
const reservationController = require('./src/controllers/reservationController');
const testDriveController = require('./src/controllers/testDriveController');

const User = require('./src/models/userModel');
const Reservation=require('./src/models/reservationModel');
const testDrive = require('./src/models/testDriveModel');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(8080, () => {
      console.log('Server is running on port 8080');
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the process on connection error
});


//sessions
app.use(
  session({
    secret: "ASTONMARTIN_KEY",
    resave: false, 
    saveUninitialized: true,
  })
);

//db rendering history
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


//load routes
const modelsRoutes = require('./src/routes/modelsRoutes')
 const adminDashRoutes = require('./src/routes/adminDashRoutes') 
const userRoutes = require('./src/routes/userRoutes'); 
app.use('/views', userRoutes);

const reservationRoutes = require('./src/routes/reservationRoutes'); 
app.use('/', reservationRoutes);

const testDriveRoutes = require('./src/routes/testDriveRoutes'); 
app.use('/', testDriveRoutes);

app.post("/login", userController.login);
app.post("/views/signup", userController.signup); 
app.post("/verify-otp", userController.verifyOtp); 

app.post('/reservation', reservationController.addReservation); 

app.post('/testDrive', testDriveController.addTestDrive)


app.use('/api', carRoutes);
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
/* app.get("/src/views/enquire.html", (req,res) => {
  res.sendFile(path.join(__dirname, 'src/views/enquire.html'))
}) */
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'src/views'));

app.get("/", (req, res) => {
  res.render("index", {
    user: req.session.user === undefined ? "" : req.session.user,
  });
});
app.get("/adminLandingPage", (req, res) => {
  res.render("adminLandingPage", {
    user: req.session.user === undefined ? "" : req.session.user,
  });
});
app.get('/reservationHistory', (req, res) => {
    res.render('reservationHistory');
});
app.get('/userHistory', (req,res) => {
    res.render('userHistory');
});
app.get('/testdriveHistory', (req,res) => {
  res.render('testdriveHistory');
});


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

/* app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  }) */