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
        enum : ['Pendiente','Autorizado','No_autorizado'],
        default: 'Pendiente'
        }
});

module.exports = model('Usuario', userSchema)
