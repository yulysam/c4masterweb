import { Schema,model } from "mongoose";

const ProyectoSchema = new Schema({
    nombre: { type: String, required: true},
    objetivos: { type: String},
    presupuesto: { type: String},
    fecha_inicio: { type: Date},
    fecha_fin: { type: Date},
    lider: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    estado: { type: String,
        enum : ['inactivo','activo'],
        default: 'inactivo'},
    face: { type: String,
        enum : ['iniciado','desarrollo','terminado'],
        default: 'iniciado'},
});

export default model('Proyecto', ProyectoSchema)