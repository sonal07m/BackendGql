const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const menuData = [
    {
        id: 1,
        name:"We-Conect",
        title:"We-Conect Home page",
        url:"https://www.we-conect.com/"
    },{
        id: 2,
        name:"Google",
        title:"Google Home page",
        url:"https://www.google.de"
    }
];


var schema = buildSchema(`
    type Menu {
        id: Int
        name: String
        title: String
        url: String
    }
    type Query {
        menu: [Menu],
    }
`);

const getMenu = function() {
    return menuData;
}

const root = {
    menu: getMenu,
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema, 
    rootValue: root, 
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL server now running on localhost:4000/graphql'));