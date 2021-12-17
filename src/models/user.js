const{Schema, model}=require('mongoose')

const userSchema  = new Schema({
    correo: { type: String, required: true},
    clave:String,
    identificacion: { type: String},
    nombre: { type: String},
    apellido: { type: String},
    rol: { type: String,
        enum : ['Estudiante','Lider','Administrador'],
        default: 'estudiante'
        },
    estado: { type: String,
        enum : ['pendiente','Autorizado','no_autorizado'],
        default: 'pendiente'
        }
});

module.exports = model('Usuario', userSchema)
