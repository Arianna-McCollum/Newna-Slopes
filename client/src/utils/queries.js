import { gql } from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
query Products($category: ID, $name: String) {
  products(category: $category, name: $name) {
    _id
    name
    price
    image
    description
    inStockQuantity
    category {
      _id
      name
    }
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      inStockQuantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          inStockQuantity
          image
        }
      }
    }
  }
`;

/*export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;*/