const express = require('express');
const clienteSchema = require('../models/cliente');

// Crear cliente
const createItem = (req, res) => {
 console.log('crea cliente');
    const cliente = clienteSchema(req.body);
    fechaCreacion = Date.now();
    cliente 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos los clientes
const traerTodos = (req, res) => {
    console.log('trae clientes');
    clienteSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    clienteSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { nombre, email, fechaActualizacion } = req.body;
    fechaActualizacion = Date.now();
    clienteSchema
           .updateOne({ _id: id }, { $set: {nombre, email, fechaActualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    clienteSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }