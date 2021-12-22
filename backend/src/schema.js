import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";


const typeDefs = `

    type Query {
        Users: [User]
        Proyectos: [Proyecto]
        Objetivos: [Objetivo]
        Inscripcions: [Inscripcion]
    }

    type User {
        _id: ID
        correo: String!
        contrasena: String!
        identificacion: String
        nombre: String
        apellido: String
        rol_aspiro: String
        rol: String
        estado: String
    }

    type Proyecto {
        _id: ID
        nombre: String!
        objetivos: String
        presupuesto: String
        fecha_inicio: String
        fecha_fin: String
        lider: ID
        estado: String
        face: String
    }

    type Objetivo {
        _id: ID
        descripcion: String!
        tipo: String
        proyecto: String
    }

    type Inscripcion {
        _id: ID
        proyecto: String
        estudiante: String
        estado: String
        fecha_ingreso: String
        fecha_egreso: String
    }

    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
        createProyecto(input: ProyectoInput): Proyecto
        deleteProyecto(_id: ID): Proyecto
        updateProyecto(_id: ID, input: ProyectoInput): Proyecto
        createObjetivo(input: ObjetivoInput): Objetivo
        deleteObjetivo(_id: ID): Objetivo
        updateObjetivo(_id: ID, input: ObjetivoInput): Objetivo
        createInscripcion(input: InscripcionInput): Inscripcion
        deleteInscripcion(_id: ID): Inscripcion
        updateInscripcion(_id: ID, input: InscripcionInput): Inscripcion
    }

    input UserInput {
        correo: String!
        contrasena: String!
        identificacion: String
        nombre: String
        apellido: String
        rol_aspiro: String
        rol: String
        estado: String
    }

    input ProyectoInput {
        nombre: String!
        objetivos: String
        presupuesto: String
        fecha_inicio: String
        fecha_fin: String
        lider: ID
        estado: String
        face: String
    }

    input ObjetivoInput {
        descripcion: String!
        tipo: String
        proyecto: ID
    }

    input InscripcionInput {
        proyecto: String
        estudiante: String
        estado: String
        fecha_ingreso: String
        fecha_egreso: String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})