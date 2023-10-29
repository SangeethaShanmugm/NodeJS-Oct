const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP
const schema = require("./Schema/schema")
const app = express();
const PORT = 2000;


app.use("/graphql", expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
