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
        description: String
        image: String
        quantity: Int
        price: Float
        category: Category
    }

    type Category {
        _id: ID
        name: String
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
    }

    type Mutation {
    }
`;

module.exports = typeDefs;
