import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";
import { connect } from "./databease";
import cors from 'cors'

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hola Master Web"
    })
});

app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
  }));

app.listen(3100, () => console.log('Servidor en localhost:3100'));