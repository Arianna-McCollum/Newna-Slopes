import { gql } from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation Mutation($products: [ID!]) {
    addOrder(products: $products) {
      _id
      purchaseDate
      products {
        _id
        name
        image
        price
        description
        inStockQuantity
        category {
          name
          _id
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation Mutation {
    deleteUser {
      email
      _id
      firstName
      lastName
      password
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation Mutation($password: String!) {
    updateUser(password: $password) {
      _id
      firstName
      lastName
      email
    }
  }
`;
