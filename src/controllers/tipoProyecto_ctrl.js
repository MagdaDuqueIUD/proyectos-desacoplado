const express = require('express');
const tipoProyectoSchema = require('../models/tipoProyecto');

// Crear tipoProyecto
const createItem = (req, res) => {
 console.log('crea tipoProyecto');
    const tipoProyecto = tipoProyectoSchema(req.body);
    fechaCreacion = Date.now();
    tipoProyecto 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos los tipos de proyectos
const traerTodos = (req, res) => {
    console.log('trae tipos de proyectos');
    tipoProyectoSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    tipoProyectoSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { nombre, fechaActualizacion } = req.body;
    fechaActualizacion = Date.now();
    tipoProyectoSchema
           .updateOne({ _id: id }, { $set: {nombre, fechaActualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    tipoProyectoSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }