import { Schema,model } from "mongoose";

const ObjetivoSchema = new Schema({
    descripcion: { type: String, required: true},
    tipo: { type: String,
        enum : ['general','especifico'],
        default: 'general'},
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'proyectos'
    }
});

export default model('Objetivo', ObjetivoSchema)