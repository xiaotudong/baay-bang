"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/BabyUser';
const fs = require('fs');
const app = new express();

app.use(bodyParser.urlencoded());

app.use(express.static('./views'));

app.use(express.static('./public'));

app.listen(3000, () => {
    console.log('Server start');
});
