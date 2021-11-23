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
    image: String
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
    products(category: ID, name: String): [Product]
    categories: [Category]
    user: User
    product(_id: ID!): Product
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(firstName: String! lastName: String! email: String! password: String!): Auth
    login(email: String! password: String!): Auth
    addOrder(products: [ID!]): Order
  }
`;

module.exports = typeDefs;
