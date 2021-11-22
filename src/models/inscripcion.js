const mongoose = require('mongoose');
const { Schema } = mongoose;

const InscripcionSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'proyectos'
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    estado: { type: String,
        enum : ['aceptada','rechazada'],
        default: 'rechazada'},
    fecha_ingreso: { type: Date, required: true},
    fecha_egreso: { type: Date, required: false}
}); 

module.exports = mongoose.model('Inscripcion', InscripcionSchema);