const express = require('express');
const tipoProyectoSchema = require('../models/tipoProyecto');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/tipoProyecto_ctrl')
const { validateCreate } = require('../validators/tipoProyecto_val')

router.post('/tipoProyecto', validateCreate, createItem,  (req, res) => {
        console.log('ingresa tipoProyecto');
});

router.get('/tipoProyecto', traerTodos,  (req, res) => {
        console.log('ingresa tipoProyecto');
});

router.get('/tipoProyecto/:id', traerUno,  (req, res) => {
        console.log('consulta tipoProyecto');
});

router.put('/tipoProyecto/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica tipoProyecto');
});

router.delete('/tipoProyecto/:id', eliminarUno,  (req, res) => {
        console.log('elimina tipoProyecto');
});

module.exports = router;