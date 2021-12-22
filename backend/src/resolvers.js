import User from "./models/user";
import Proyecto from "./models/proyectos";
import Objetivo from "./models/objetivos";
import Inscripcion from "./models/inscripcion";

export const resolvers = {
    Query: {
        async Users() {
            return await User.find();
        },
        async Proyectos() {
            return await Proyecto.find();
        },
        async Objetivos() {
            return await Objetivo.find();
        },
        async Inscripcions() {
            return await Inscripcion.find();
        },
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
        async createProyecto(_,{ input }){
            const newUser = new Proyecto(input)
            await newUser.save();
            return newUser;
        },
        async deleteProyecto(_, { _id }){
            return await Proyecto.findByIdAndDelete(_id);
        },
        async updateProyecto(_, { _id, input }) {
            return await Proyecto.findByIdAndUpdate(_id, input, {new: true});
        },
        async createObjetivo(_,{ input }){
            const newUser = new Objetivo(input)
            await newUser.save();
            return newUser;
        },
        async deleteObjetivo(_, { _id }){
            return await Objetivo.findByIdAndDelete(_id);
        },
        async updateObjetivo(_, { _id, input }) {
            return await Objetivo.findByIdAndUpdate(_id, input, {new: true});
        },
        async createInscripcion(_,{ input }){
            const newUser = new Inscripcion(input)
            await newUser.save();
            return newUser;
        },
        async deleteInscripcion(_, { _id }){
            return await Inscripcion.findByIdAndDelete(_id);
        },
        async updateInscripcion(_, { _id, input }) {
            return await Inscripcion.findByIdAndUpdate(_id, input, {new: true});
        }
    }
};