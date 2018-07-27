const Query = require('./Query');
const Author = require('./Author');
const Book = require('./Book');
const Mutation = require('./Mutation');
const Bridge = require('./Bridge');
const resolvers = {
  Query,
  Author,
  Book,
  Mutation,
  Bridge
};

module.exports = resolvers;
