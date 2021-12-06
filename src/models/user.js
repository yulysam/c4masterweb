import { Schema,model } from "mongoose";

const userSchema  = new Schema({
    correo: { type: String, required: true},
    contrasena: { type: String, required: true},
    identificacion: { type: String},
    nombre: { type: String},
    apellido: { type: String},
    rol_aspiro: { type: String},
    rol: { type: String,
        enum : ['pendiente','autorizado','no_autorizado'],
        default: 'pendiente'},
    estado: { type: String,
        enum : ['estudiante','lider','administrador'],
        default: 'estudiante'}
});

export default model('User', userSchema)