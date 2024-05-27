const express = require('express');
const proyectoSchema = require('../models/proyecto');

const TipoProyecto = require('../models/tipoProyecto')
const Cliente = require('../models/cliente')
const Universidad = require('../models/universidad')
const Etapa = require('../models/etapa')



// crear
const createProyecto = async (req = request, 
    res = response) => {
    try{
        const data = req.body
        const { tipoProyecto, cliente, universidad, etapa } = data;    
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id
        })// select * from tipoproyectos where _id=?
        if(!tipoProyectoDB){
            return res.status(400).json({msg: 'tipo proyecto invalido'})
        }
        const clienteDB = Cliente.findOne({
            _id: cliente._id
        })// select * from clientes where _id=?
        if(!clienteDB){
            return res.status(400).json({msg: 'cliente invalido'})
        }

        
        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)

    } catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}




// Crear proyecto
const createItem2 = (req, res) => {
    console.log('crea proyecto');
       const proyecto = proyectoSchema(req.body);
       fechaCreacion = Date.now();


       const data = req.body
       const { tipoProyecto, cliente, universidad, etapa } = data;    
       const tipoProyectoDB = TipoProyecto.traerUno({
           _id: tipoProyecto._id
       })// select * from tipoproyectos where _id=?
       if(!tipoProyectoDB){
           return res.status(400).json({msg: 'tipo proyecto invalido'})
       }
       const clienteDB = Cliente.traerUno({
           _id: cliente._id
       })// select * from clientes where _id=?
       if(!clienteDB){
           return res.status(400).json({msg: 'cliente invalido'})
       }       

       const etapaDB = Etapa.traerUno({
           _id: etapa._id
       })// select * from etapas where _id=?
       if(!etapaDB){
           return res.status(400).json({msg: 'etapa invalido'})
       }  

       const universidadDB = Universidad.traerUno({
           _id: universidad._id
       })// select * from universidad where _id=?
       if(!universidadDB){
           return res.status(400).json({msg: 'universidad invalido'})
       }  
       
       
       proyecto 
           .save()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };




// Crear proyecto
const createItem = (req, res) => {
 console.log('crea proyecto');
    const proyecto = proyectoSchema(req.body);
    fechaCreacion = Date.now();
    proyecto 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

// Traer todos los proyectos
const traerTodos = (req, res) => {
    console.log('trae proyectos');
    proyectoSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   };

const traerUno = (req, res) => {
    const { id } = req.params;
    proyectoSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const modificarUno = (req, res) => {
    const { id } = req.params;
    const { numero, titulo, fechaInicio, fechaEntrega, valor, tipoProyectoId, universidadId, clienteId, etapaId, fechaActualizacion } = req.body;
    fechaActualizacion = Date.now();
    proyectoSchema
           .updateOne({ _id: id }, { $set: {numero, titulo, fechaInicio, fechaEntrega, valor, tipoProyectoId, universidadId, clienteId, etapaId, fechaActualizacion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   };

const eliminarUno = (req, res) => {
    const { id } = req.params;
    proyectoSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }; 

module.exports = { createItem, createItem2, traerTodos, traerUno, modificarUno, eliminarUno }