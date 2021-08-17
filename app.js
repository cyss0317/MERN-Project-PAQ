const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const User = require("./models/User");
const bodyParser = require("body-parser");
const Shipment = require("./models/Shipment")
const shipments = require("./routes/api/shipments")


mongoose
  .connect(db, { useNewUrlParser: true} )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());


// if address starts with this, we want to render this
app.use("/api/users", users)
app.use("/api/shipments", shipments)

const port = process.env.PORT || 5000; 

app.listen(port, () => {console.log(`Listening on port ${port}`)});