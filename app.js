const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const User = require("./models/User");


const bodyParser = require("body-parser");
const Shipment = require("./models/Shipment")
const shipments = require("./routes/api/shipments")

const orders = require("./routes/api/orders");
const Order = require("./models/Order");

const messages = require('./routes/api/sms')
const contact = require('./routes/api/contact')
const cors = require("cors");

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true} )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());


// if address starts with this, we want to render this
app.use("/api/users", users)
app.use("/api/orders", orders)

app.use('/api/messages', messages)

app.use("/api/shipments", shipments);
app.use("/api/contact", contact);
app.use(cors());


const port = process.env.PORT || 5000; 

app.listen(port, () => {console.log(`Listening on port ${port}`)});
