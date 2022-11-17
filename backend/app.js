require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT;
const web = process.env.WEB_HOST;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', web);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

require('./config/db.js');

const router = require('./routes/Router.js');
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
