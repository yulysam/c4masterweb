const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type Query {
        Users: [User]
        Proyectos:[proyecto]
    }

    type Avance{
        titulo:String
        descripcion:String
    }

    type Objetivo{
        titulo:String
        descripcion:String
    }


    type proyecto {
        nombre:String
        facultad:String
        lider:String
        presupuesto:Int
        objetivosGenerales:[Objetivo]
        objetivosEspecificos:[Objetivo]
        avances:[Avance]
        integrantes:[User]
        estado:String
        fase:String
        aprobado:Boolean

    }

    type User {
        _id: String
        correo: String
        identificacion: String
        nombre: String
        apellido: String
        rol: String
        estado: String
    }

    type Auth{
        jwt: String
        status: Int
    }
    
    
    
    type Mutation {
        createUser(input: UserInput):String
        authorization(correo:String, clave:String):Auth
        deleteUser(_id: String): String
        updateUser(_id: String, input: UserInput): String
        approveUser(_id:String):String
        solUsuario(_id:String, nombre:String):String
        regUsuario(_id:String, nombre:String):String
        createProject(project:ProjectInput):String
        updStateProject(nombre:String):String
        approveProject(nombre:String):String
        finishProject(nombre:String):String
        liderUpdateProject(nombre:String, updateProject:LiderProInput):String
        regAvance(nombre:String, avance:AvancesInput):proyecto
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
        correo: String
        identificacion: String
        nombre: String
        apellido: String
        rol: String
        estado: String
    }
`;

module.exports = typeDefs