const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    correo: { type: String, required: true},
    identificacion: { type: String, required: true},
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    rol: { type: String,
        enum : ['pendiente','autorizado','no_autorizado'],
        default: 'pendiente'},
    estado: { type: String,
        enum : ['estudiante','lider','administrador'],
        default: 'estudiante'}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);