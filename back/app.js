//Import des modules

const express = require('express');
const mongoose = require('mongoose');
const listRte = require('./routes/listRoutes');

//Connection à la base de données

const mongoConnect = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.qwua6.mongodb.net/${process.env.DB_NAME}?${process.env.DB_SET}`

//Paramètres de connexion à la base de données

mongoose.connect(mongoConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(express.json());

app.use('/api/', listRte);

module.exports = app;