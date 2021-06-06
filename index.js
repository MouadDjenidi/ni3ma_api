const functions = require("firebase-functions");
const express = require("express");
const app = express();

const admin = require("firebase-admin");
const serviceAccount = require("./permission.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const cors = require("cors");
app.use( cors( {origin: true} ));

const productRoutes        = require("./routes/productRoutes");
const promoShopRoutes      = require("./routes/promoShopRoutes");
const geolocationRoutes    = require("./routes/geolocationRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const userRoutes = require("./routes/userRoutes");



const logo = require("./tools/logo")

//logo.logo();    
app.get('/', (req, res) => {    
  res.send('WELCOME TO ni3ma API TO USE THIS API YOU NEED ACCES TOCKEN ');
});

app.use('/', productRoutes);
app.use('/', promoShopRoutes);
app.use('/', geolocationRoutes);
app.use('/', authenticationRoutes);
app.use('/', userRoutes);

exports.app=functions.https.onRequest(app);

