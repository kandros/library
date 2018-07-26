const {gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    authors: [Author!]!
    author(id: ID!): Author!
    book(id: ID!): Book!
    books: [Book!]!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }
  type Book {
    id: ID!
    title: String
    authors: [Author!]!
  }

  type Mutation {
    addBook(title: String): Book!
    addAuthor(name: String!): Author!
  }

`;

module.exports = typeDefs;
