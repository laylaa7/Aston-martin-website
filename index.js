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

const dbURI = 'mongodb+srv://dbUser:nourPassword@cluster0.t2qbiv0.mongodb.net/data_History?retryWrites=true&w=majority&appName=Cluster0';

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

//mongo code
// app.get('/index-database-write', (req,res)=>{
//     const user=new User({
//         title:'new user 2',
//         snippet:'user email',
//         body:'user info'
//     });

//     user.save()
//        .then((result)=>{
//          console.log('write to database done');
//          res.send(result)
//        })
//        .catch((eer)=>{
//         console.log(err);
//        });
// })

// Create a new user instance
// app.post('/users', async (req, res) => {
//   try {
//       const { firstName, lastName, email, telephone, reservation, carModel } = req.body;

//       const newUser = new User({
//           firstName,
//           lastName,
//           email,
//           telephone,
//           reservation,
//           carModel
//       });

//       // Save the user to the database
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser); 
//   } catch (error) {
//       console.error('Error saving user:', error);
//       res.status(500).json({ message: 'Server error' });
//   }
// });

// // read from database all users in descending order
// router.get('/historyusers', async (req, res) => {
//   try {
//       const users = await User.find().sort({ createdAt: -1 }).exec();
//       console.log(users);
//       res.render('./historyusers', { users: users });
//   } catch (error) {
//       console.error('Error fetching users:', error);
//       res.status(500).send('Internal Server Error');
//   }
// });

// module.exports = router;


// app.get('/index-database-readSingle', (req,res)=>{
//     User.findById('6672aa1fca6a32995f7f99c8')
//     .then((result)=>{
//         console.log('read single record from database done');
//         res.send(result)
//       })
//       .catch((eer)=>{
//        console.log(err);
//       });
// })

// load routes
const modelsRoutes = require('./src/routes/modelsRoutes');
app.use('/models', modelsRoutes)

const userRoutes = require('./src/routes/userRoutes');
app.use('/views', userRoutes);


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

app.use(express.static(path.join(__dirname, 'public')));



//testDrive database
// app.post('/testDriveHistory', testDriveController.saveTestDrive);














// app.listen(8080, function () {
//     console.log('Server is running on port 8080')
// })

