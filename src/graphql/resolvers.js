const proyecto = require('../models/modelproyectos')
const User = require('../models/user')

const resolvers = {
    Query: {
        async Users() {
            return await User.find();
        },
        Proyectos: async () => {
            return await proyecto.find()
        }
    },
    Mutation: {
        async createUser(_,{ input }){
            const newUser = new User(input)
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, { _id }){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, {new: true});
        },
        
        createProject: async (parent, args, context, info) => {
            const regProj = new proyecto (args.project)
            return regProj.save()
                .then(u=>'el projecto ha sido creado')
                .catch(e=> 'el projecto no se ha creado')

        },
//Mutation para cambiar el estado de los proyectos
        updStateProject: async (parent, args, context, info) => {
            const StatePro = await proyecto.findOne({nombre:args.nombre})
            if (StatePro && StatePro.estado === "Inactivo") {
                return proyecto.updateOne({nombre:args.nombre},{estado:"Activo"})
                    .then(u=>"Proyecto activo")
                
            } else {
                return proyecto.updateOne({nombre:args.nombre},{estado:"Inactivo"})
                    .then(u=>"Proyecto Inactivo")
            }
               
                
            
        }
    }
};

module.exports = resolvers