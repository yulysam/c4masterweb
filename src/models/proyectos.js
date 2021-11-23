const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProyectoSchema = new Schema({
    nombre: { type: String, required: true},
    objetivos: { type: String, required: true},
    presupuesto: { type: String, required: true},
    fecha_inicio: { type: Date, required: true},
    fecha_fin: { type: Date, required: false},
    lider: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    estado: { type: String,
        enum : ['activo','inactivo'],
        default: 'inactivo'},
    face: { type: String,
        enum : ['iniciado','desarrollo','terminado'],
        default: 'iniciado'},
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);