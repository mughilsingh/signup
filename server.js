const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

const homepageRoutes = require('./routes/homepageRoutes');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');

const dotenv = require('dotenv');
dotenv.config();
const dbusername= process.env.DB_USERNAME;
const dbpassword= process.env.DB_PASSWORD;
dbURI = `mongodb+srv://${dbusername}:${dbpassword}@testingcluster.ix9mpsg.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURI).then((result) => app.listen(4000)).catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.use(express.json());
app.use("/index", homepageRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);


