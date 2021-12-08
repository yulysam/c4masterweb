const { Schema, model } = require('mongoose')

const projectModel = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    facultad: {
        type: String,
        required: true
    },
    lider: {
        ref:"Usuario",
        type:Schema.Types.ObjectId,
        required: true
    },
    integrantes: [{
        type:Object   
    }],
    aprobado: {
        type: Boolean,
        default: false
    },
    estado: {
        type: String,
        default: "Inactivo"
    },
    fase: {
        type: String,
        default: "esperando"
    },
    objetivosGenerales: [{
        titulo: String,
        descripcion: String
    }],
    objetivosEspecificos: [{
        titulo: String,
        descripcion: String
    }],
    presupuesto: {
        type: Number,
        default: 0
    },
    avances: [{
        titulo: String,
        descripcion: String,
        fecha: { type: Date, default: new Date() }
    }
    ]

},{
    timestamps:true
})
module.exports = model('proyecto', projectModel)
