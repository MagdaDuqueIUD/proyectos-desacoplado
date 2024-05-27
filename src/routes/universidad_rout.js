const express = require('express');
const universidadSchema = require('../models/universidad');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/universidad_ctrl')
const { validateCreate } = require('../validators/universidad_val')

router.post('/universidad', validateCreate, createItem,  (req, res) => {
        console.log('ingresa universidad');
});

router.get('/universidad', traerTodos,  (req, res) => {
        console.log('ingresa universidad');
});

router.get('/universidad/:id', traerUno,  (req, res) => {
        console.log('consulta universidad');
});

router.put('/universidad/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica universidad');
});

router.delete('/universidad/:id', eliminarUno,  (req, res) => {
        console.log('elimina universidad');
});

module.exports = router;