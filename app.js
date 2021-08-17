const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const User = require("./models/User");
const bodyParser = require("body-parser");

const messages = require('./routes/api/sms')

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true} )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const user = new User({
    name: "yun",
    email: "cyss0317@gmail.com",
    phoneNumber: "+1-254-449-4325",
    password: "password"
  })
  user.save();
  res.send("Hello Welcom to PAQ");
})

// if address starts with this, we want to render this
app.use("/api/users", users)
app.use('/api/messages', messages)

const port = process.env.PORT || 5000; 

app.listen(port, () => {console.log(`Listening on port ${port}`)});
