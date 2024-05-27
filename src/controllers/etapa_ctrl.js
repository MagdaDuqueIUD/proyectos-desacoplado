const express = require('express');
const etapaSchema = require('../models/etapa');

// Crear etapa
const createItem = (req, res) => {
 console.log('crea etapa');
    const etapa = etapaSchema(req.body);
    fechaCreacion = Date.now();
    etapa 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos las etapa
const traerTodos = (req, res) => {
    console.log('trae etapas');
    etapaSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    etapaSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { nombre, fechaActualizacion } = req.body;
    fechaActualizacion = Date.now();
    etapaSchema
           .updateOne({ _id: id }, { $set: {nombre, fechaActualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    etapaSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, traerTodos, traerUno, modificarUno, eliminarUno }