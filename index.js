const express = require('express')
const path = require('path')
var cors = require('cors')

const mongoose = require('mongoose')
const User= require('./models/database')

const app = express()

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
app.get('/index-database-write', (req,res)=>{
    const user=new User({
        title:'new user 2',
        snippet:'user email',
        body:'user info'
    });

    user.save()
       .then((result)=>{
         console.log('write to database done');
         res.send(result)
       })
       .catch((eer)=>{
        console.log(err);
       });
})

app.get('/index-database-read', (req,res)=>{
    User.find()
    .then((result)=>{
        console.log('read from database done');
        res.send(result)
      })
      .catch((eer)=>{
       console.log(err);
      });
})

app.get('/index-database-readSingle', (req,res)=>{
    User.findById('6672aa1fca6a32995f7f99c8')
    .then((result)=>{
        console.log('read single record from database done');
        res.send(result)
      })
      .catch((eer)=>{
       console.log(err);
      });
})

// load routes
const modelsRoutes = require('./src/routes/modelsRoutes');

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

// app.listen(8080, function () {
//     console.log('Server is running on port 8080')
// })

