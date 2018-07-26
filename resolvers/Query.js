const {getAuthors, getBooks, getAuthorById, getBookById} = require('../utils');

const query = {
  authors: (parent, args, context) => {
    return getAuthors(context.db);
  },
  author: (parent, args, context) => {
    return getAuthorById(context.db, args.id);
  },
  book: (parent, args, context) => {
    return getBookById(context.db, args.id);
  },
  books: (parent, args, context) => {
    return getBooks(context.db);
  }
};

module.exports = query;
