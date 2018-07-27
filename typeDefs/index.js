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

  type Bridge {
    authorid: ID!
    booksid: ID!
    id: ID!
  }

  type Mutation {
    addBook(title: String): Book!
    addAuthor(name: String!): Author!
    addLink(authorid: ID!, booksid: ID!): Bridge!
    deleteAuthor(id: ID!): Author
    deleteBook(id: ID!): Book!
  }

`;

module.exports = typeDefs;
