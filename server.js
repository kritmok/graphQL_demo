const express = require("express");
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const app = express()

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Hello',
        fields: () => ({
            message: { type: GraphQLString,
            resolve: () => 'Hello World'}
        })
    })
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))



app.listen(5001, () => {
    console.log("Server is up and running on port 5000");
})