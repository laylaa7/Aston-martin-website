const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simulate a user login check (in a real application, you'd check the database)
  if (username === "testuser" && password === "password") {
    req.session.username = username;
    res.status(200).json({ username });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
