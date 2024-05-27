const { Schema, model } = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: Number,
        required: [true, 'Número requerido'],
        unique: [true]
    },
    titulo: {
        type: String,
        required: [true, 'Título requerido']
    },
    fechaInicio: {
        type: Date,
        required: [false, 'Fecha inicio requerida']
    },
    fechaEntrega: {
        type: Date,
        required: [false, 'Fecha entrega requerida']
    }, 
    valor: {
        type: Number,
        required: [true, 'Valor  requerido']
    },  
    tipoProyecto_Id : {
        type:Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: [true, 'Valor  requerido']
    },
    universidad_Id : {
        type:Schema.Types.ObjectId,
        ref: 'Universidad',
        required: [true, 'Valor  requerido']
    },
    cliente_Id : {
        type:Schema.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'Valor  requerido']
    },      
    etapa_Id : {
        type:Schema.Types.ObjectId,
        ref: 'Etapa',
        required: [true, 'Valor  requerido']
    },             
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Proyecto', ProyectoSchema)
