const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose }= require('./database');

const app = express();


//Settings 
app.set('port', process.env.PORT || 3000);
//Midlewares - funciones que se ejecutan antes que lleguen a las rutas 
app.use(morgan('dev'));
app.use(express.json()); //cada vez que llega un dato a nuestro servidor va a pasar por esta funcion 

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

//Static files (html, css, js)
app.use(express.static(path.join(__dirname, 'public')));


//Starting el servidor
app.listen(app.get('port'), () => {
    console.log(`El servidor funciona correctamente en el puerto ${app.get('port')}`);
});

