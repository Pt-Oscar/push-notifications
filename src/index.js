require('dotenv').config();
// RECORDAR ACTIVAR NOTIFICACIONES EN NAVEGADOR LOCALHOST:3000
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes
app.use(require('./routes'))

//Static
app.use(express.static(path.join(__dirname, 'public')))

//Server
app.listen('3000', ()=> {
    console.log('server listening')
})