import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";


const typeDefs = `

    type Query {
        Users: [User]
    }

    type User {
        _id: ID
        correo: String!
        identificacion: String
        nombre: String
        apellido: String
        rol: String
        estado: String
    }

    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    input UserInput {
        correo: String!
        identificacion: String
        nombre: String
        apellido: String
        rol: String
        estado: String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})