const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
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
    purchaseDate: String
    products: [Product]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    orders: [Order]
    products: [Product]
  }

  type Mutation {
    addUser(firstName: String! lastName: String! email: String! password: String!): User
  }
`;

module.exports = typeDefs;
