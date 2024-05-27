const express = require('express');
const etapaSchema = require('../models/etapa');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/etapa_ctrl')
const { validateCreate } = require('../validators/etapa_val')

router.post('/etapa', validateCreate, createItem,  (req, res) => {
        console.log('ingresa etapa');
});

router.get('/etapa', traerTodos,  (req, res) => {
        console.log('ingresa etapa');
});

router.get('/etapa/:id', traerUno,  (req, res) => {
        console.log('consulta etapa');
});

router.put('/etapa/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica etapa');
});

router.delete('/etapa/:id', eliminarUno,  (req, res) => {
        console.log('elimina etapa');
});

module.exports = router;