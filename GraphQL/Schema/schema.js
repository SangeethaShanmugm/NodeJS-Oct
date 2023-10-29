const graphql = require("graphql");
const _ = require('lodash')
const axios = require("axios")
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const users = [
    {
        id: "1",
        firstName: "Bill",
        age: 30,
    },
    {
        id: "2",
        firstName: "Jack",
        age: 20,
    },
    {
        id: "3",
        firstName: "John",
        age: 35,
    },
    {
        id: "4",
        firstName: "Peter",
        age: 38,
    },
    {
        id: "5",
        firstName: "Mick",
        age: 40,
    },
    {
        firstName: "Andrew",
        age: 40,
        id: "da21QWd",
    },
    {
        firstName: "Robert",
        age: 50,
        id: "8WKpa-7",
    },
];

//create user object

const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    },
});

//define root query

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: userType, //object name
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:8900/users/${args.id}`)
                    .then((result) => result.data);
            },
        },
    },
});

//adduser=> insert & update
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNewUser: {
            type: userType,
            args: {
                firstName: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parentValue, { firstName, age }) {
                return axios.post(`http://localhost:8900/users`, { firstName, age })
                    .then((result) => result.data);
            },
        }
    }
})







module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
});
