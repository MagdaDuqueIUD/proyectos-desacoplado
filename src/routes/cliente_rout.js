const express = require('express');
const clienteSchema = require('../models/cliente');
const router = express.Router();
const { createItem, traerTodos, traerUno, modificarUno, eliminarUno } = require('../controllers/cliente_ctrl')
const { validateCreate } = require('../validators/cliente_val')

router.post('/cliente', validateCreate, createItem,  (req, res) => {
        console.log('ingresa cliente');
});

router.get('/cliente', traerTodos,  (req, res) => {
        console.log('ingresa cliente');
});

router.get('/cliente/:id', traerUno,  (req, res) => {
        console.log('consulta cliente');
});

router.put('/cliente/:id', validateCreate, modificarUno,  (req, res) => {
        console.log('modifica cliente');
});

router.delete('/cliente/:id', eliminarUno,  (req, res) => {
        console.log('elimina cliente');
});

module.exports = router;