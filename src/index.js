const express = require('express')
const {ApolloServer} = require('apollo-server-express')

const initServer = () => {
    const app = express()
    const apollo = new ApolloServer({typeDefs,resolvers})
    await apollo.start()
    apollo.applyMiddleware({app})
    app.listen ('9091', () => console.log('apollo funcionando en el port 9091') )
    

}