const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.listen(3000, () => {console.log('servidor corriendo en puerto 3000')});

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

// Configuración API
const apiRouter = require('./routes/api/api')
app.use('/api', apiRouter);