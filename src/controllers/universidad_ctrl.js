const express = require('express');
const universidadSchema = require('../models/universidad');

// Crear universidad
const createItem = (req, res) => {
 console.log('crea universidad');
    const universidad = universidadSchema(req.body);
    fechaCreacion = Date.now();
    universidad 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos las universidades
const traerTodos = (req, res) => {
    console.log('trae universidades');
    universidadSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    universidadSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, fechaActualizacion } = req.body;
    fechaActualizacion = Date.now();
    universidadSchema
           .updateOne({ _id: id }, { $set: {nombre, direccion, telefono, fechaActualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    universidadSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }