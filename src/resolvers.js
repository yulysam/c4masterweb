import { tasks } from "./sample";

import User from "./models/user";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hola grupo c4 master web'
        },
        greet(root, {name}) {
            return `Hello ${name}!`;
        },
        tasks() {
            return tasks;
        }
    },
    Mutation: {
        createTask(_,{ input }){
            input._id = tasks.length;
            tasks.push(input);
            console.log(input);
            return input;
        },
        async createUser(_,{ input }){
            const newUser = new User(input)
            await newUser.save();
            return null;
        }
    }
};