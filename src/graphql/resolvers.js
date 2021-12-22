const {CrearProyecto, 
    activarProyecto, 
    AprobarProyecto, 
    FinalizarProyecto, 
    ActualizarProyecto, 
    RegistroAvances,
    aprobarUsuario,
    solcitarUnionalProyecto
}= require('../services/proyecto.service')

const {registrar, ingresar, autorizarUsuario} = require('../services/usuario.service')

const {Administrador, Lider, Estudiante} = require('../middlewares/authjwt')

const proyecto = require('../models/modelproyectos')
const User = require('../models/user')

const resolvers = {
    Query: {
        async Users() {
            return await User.find();
        },
        Proyectos: async () => {
            return await proyecto.find().populate('integrantes')
        }
    },
    Mutation: {
         createUser: async(parent, args, context, info) => registrar(args.input),

        async deleteUser(_, { _id }) {
            await User.findByIdAndDelete(_id);
            return "el ususario ha sido eliminado" 
        },
        async updateUser(_, { _id, input }) {
            await User.updateOne(_id, input, { new: true });
            return "usuario actualizado"
        },

        authorization: async(parent, args, context, info) => ingresar(args.correo, args.clave),

        approveUser: async(parent, args, context, info) => autorizarUsuario(args._id),

        createProject: async (parent, args, context, info) =>{
            //if (Lider(context.rol)){}
                CrearProyecto(args.project)
        },
        //Mutation para cambiar el estado de los proyectos
        updStateProject: async (parent, args, context, info) => activarProyecto(args.nombre),

        approveProject: async (parent, args, context, info) =>{

            AprobarProyecto(args.nombre)
            // if (Administrador(context.rol)){
            // }
        },    
        finishProject: async (parent, args, context, info) =>{

            if (Administrador(context.rol)){
                FinalizarProyecto(args.nombre)
            }
        },
        
        liderUpdateProject: async (parent, args, context, info) => {
            if (Administrador(context.rol)){
                ActualizarProyecto(args.nombre, args.updateProject)
            }
        },

        regAvance: async (parent, args, context, info) => {
            if (Estudiante(context.rol) || Lider(context.rol)){
                RegistroAvances(args.nombre, args.avance) 
            }
        },
        
        regUsuario: async (parent, args, context, info) => {
            if(Lider(context.rol)){
                aprobarUsuario(args._id, args.nombre)
            }
        },

        solUsuario: async(parent, args, context, info) => {
            solcitarUnionalProyecto(args._id, args.nombre)
            // if(Estudiante(context.rol)){
            // }
        }
        
    }

};

module.exports = resolvers