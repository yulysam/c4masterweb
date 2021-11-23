const mongoose = require('mongoose');
const { Schema } = mongoose;

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

module.exports = mongoose.model('Objetivo', ObjetivoSchema);