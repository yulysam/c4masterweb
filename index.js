require('./src/db/databease')

const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const jwt = ('jsonwebtoken')
const key = 'HolaMundo'

const typeDefs = require('./src/graphql/typeDefs')
const resolvers = require('./src/graphql/resolvers')
const authRoute = require('./src/Routes/auth.routes')
const initServer = async () => {
    const app = express()
    const apollo = new ApolloServer({
        typeDefs,
        resolvers, 
        context: ({req})=>{
            const token = req.headers.authorization
            try{
                const perfil = jwt.verify(token, key)
                if(perfil){
                    rol = perfil.rol
                    return {rol}
                }

            }catch(error){
                console.log(error)

            }
            return{}
        }
    })
    await apollo.start()
    apollo.applyMiddleware({app})
    app.use(express.json())
    app.use('/api', )
    app.listen ('9091', () => console.log('apollo funcionando en el port 9091') )


}

initServer()