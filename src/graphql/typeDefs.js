const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type Query {
        Users: [User]
        Proyectos:[proyecto]
    }

    type proyecto {
        nombre:String
        facultad:String
        lider:String
        presupuesto:Int
        objetivosGenerales:[String]
        objetivosEspecificos:[String]
        avances:[String]
        integrantes:[String]
        estado:String
        fase:String
        aprobado:Boolean

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
        createProject(project:ProjectInput):String
        updStateProject(nombre:String):String
        approveProject(nombre:String):String
        finishProject(nombre:String):String
        liderUpdateProject(nombre:String, updateProject:LiderProInput):String
        regAvance(nombre:String, avance:AvancesInput):String
    }

    input AvancesInput{
        titulo:String
        descripcion:String
    }

    input LiderProInput{
        nombre:String
        objetivosGenerales:[ObjetivosInput]
        objetivosEspecificos:[ObjetivosInput]
        presupuesto:Int
    }

    input ObjetivosInput{
        titulo:String
        description:String
    }
    input ProjectInput{
        facultad:String
        lider:String
        nombre:String
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

module.exports = typeDefs