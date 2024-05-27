const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();


const clienteRoutes = require('./routes/cliente_rout');//
const etapaRoutes = require('./routes/etapa_rout');//
const proyectoRoutes = require('./routes/proyecto_rout');//
const tipoProyectoRoutes = require('./routes/tipoProyecto_rout');//
const universidadRoutes = require('./routes/universidad_rout');//


// Inicializaciones
const app = express(); //para cargar el framework express
require('./database');

// middleware
app.use(express.urlencoded({extended: false}));// para que el servidor entienda datos simples ejemplo texto que llegue desde una página web
app.use(express.json());// para que el swervidor entienda json
app.use('/api', clienteRoutes);
app.use('/api', etapaRoutes);
app.use('/api', proyectoRoutes);
app.use('/api', tipoProyectoRoutes);
app.use('/api', universidadRoutes);

// settings
app.set('port', process.env.PORT || process.env.PORT); // este app se puede referenciar desde cualquier parte de la aplicación por eso no se pone como variable
app.use( (req, res) => {
    res.status(404).json({status:false,errors:'Ruta no disponible'})
})


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

