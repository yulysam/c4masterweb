const{Schema, model}=require('mongoose')

const userSchema  = new Schema({
    correo: { type: String, required: true},
    identificacion: { type: String},
    nombre: { type: String},
    apellido: { type: String},
    rol: { type: String,
        enum : ['estudiante','lider','administrador'],
        default: 'estudiante'
        },
    estado: { type: String,
        enum : ['pendiente','autorizado','no_autorizado'],
        default: 'pendiente'
        }
});

module.exports = model('Usuario', userSchema)
