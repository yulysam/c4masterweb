const {CrearProyecto, 
    activarProyecto, 
    AprobarProyecto, 
    FinalizarProyecto, 
    ActualizarProyecto, 
    RegistroAvances,
    aprobarUsuario,
    solcitarUnionalProyecto
}=require('../services/proyecto.service')
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
        async createUser(_, { input }) {
            const newUser = new User(input)
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        },

        createProject: async (parent, args, context, info) =>{
            if (Lider(context.rol)){
                CrearProyecto(args.project)
            }
        },
        //Mutation para cambiar el estado de los proyectos
        updStateProject: async (parent, args, context, info) => activarProyecto(args.nombre),

        approveProject: async (parent, args, context, info) =>{

            if (Administrador(context.rol)){
                AprobarProyecto(args.nombre)
            }
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
            if(Estudiante(context.rol)){
                solcitarUnionalProyecto(args._id, args.nombre)
            }
        }
        
    }

};

module.exports = resolvers