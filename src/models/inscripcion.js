import { Schema,model } from "mongoose";

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
    fecha_ingreso: { type: String},
    fecha_egreso: { type: String}
}); 

export default model('Inscripcion', InscripcionSchema)