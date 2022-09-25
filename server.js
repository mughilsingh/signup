const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

const bodyParser = require('body-parser');
const homepageRoutes = require('./routes/homepageRoutes');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const verifyEmailRoutes = require('./routes/verifyEmailRoutes');
const dotenv = require('dotenv');

dotenv.config();
const dbusername= process.env.DB_USERNAME;
const dbpassword= process.env.DB_PASSWORD;
dbURI = `mongodb+srv://${dbusername}:${dbpassword}@testingcluster.ix9mpsg.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURI).then((result) => { console.log('Connected to MongoDB')
app.listen(4000)}).catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('assets'));
// app.use(express.json());

app.use("/", homepageRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);
app.use("/verify-email", verifyEmailRoutes);