const {Schema, model}=require('mongoose') 

const projectModel = new Schema ({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    facultad: {
        type:String,
        required:true
    },
    lider: {
        type:String,
        required:true
    },
    integrantes: {
        type: [String]
    },
    aprobado:{
        type:Boolean,
        default:false
    },
    estado:{
        type:String,
        default:"Inactivo"
    },
    fase:{
        type:String,
        default: "esperando"
    },
    objetivosGenerales:[{
        titulo:String,
        description:String
    }],
    objetivosEspecificos:[{
        titulo:String,
        description:String
    }],
    presupuesto:{
        type:Number,
        default: 0
    },
    avances:[ {
        titulo:String,
        descripcion:String,
        fecha: {type:Date, default: new Date()}        
    }
    ]

})
module.exports = model('proyecto', projectModel)
