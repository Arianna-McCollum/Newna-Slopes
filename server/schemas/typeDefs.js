const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Product {
        _id: ID
        name: String
        price: Float
        description: String
        inStockQuantity: Int
        category: Category
    }

    type Category {
        _id: ID
        name: String
    }

    type Order {
        _id: ID
        date: String
        items: [Product]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        products: [Product]
        orders: [Order]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
