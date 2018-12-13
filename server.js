const express = require ("express");
const path = require ("path");
var morgan = require('morgan')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var nodemailer = require('nodemailer');
const cors = require('cors');
const routes = require("./routes/API/routes");

require('dotenv').config();

const PORT = process.env.PORT || 8081;







// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(cors());
app.options('*', cors());

//app.use(express.static("./client/build"));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Serve up static assets

// Add routes, both API and view
app.use(routes)

app.use(express.static(path.join(__dirname, "client")))
// ... other app.use middleware setups
app.use(express.static(path.join(__dirname, "client", "build")))





// ...
// Right before your app.listen(), add this:
 app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
 });

app.listen(PORT, function(){
    console.log(`Server now on port ${PORT}`)
});


// Set up promises with mongoose
mongoose.Promise = global.Promise;
mongoose.set('debug', false) // enable logging collection methods + arguments to the console
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TheLuckyStarr", { useNewUrlParser: true });


