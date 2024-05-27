const express = require('express');
const proyectoSchema = require('../models/proyecto');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/proyecto_ctrl')
const { validateCreate } = require('../validators/proyecto_val')

router.post('/proyecto', validateCreate, createItem,  (req, res) => {
        console.log('ingresa proyecto');
});

router.get('/proyecto', traerTodos,  (req, res) => {
        console.log('ingresa proyecto');
});

router.get('/proyecto/:id', traerUno,  (req, res) => {
        console.log('consulta proyecto');
});

router.put('/proyecto/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica proyecto');
});

router.delete('/proyecto/:id', eliminarUno,  (req, res) => {
        console.log('elimina proyecto');
});

module.exports = router;