const {
  addAuthor,
  addSingleBook,
  addLink,
  deleteAuthor,
  deleteBook
} = require('../utils');

const mutation = {
  addAuthor: (parent, args, context) => {
    return addAuthor(context.db, args.name);
  },
  addBook: (parent, args, context) => {
    return addSingleBook(context.db, args.title);
  },
  addLink: (parent, args, context) => {
    return addLink(context.db, args.authorid, args.booksid);
  },
  deleteAuthor: (parent, args, context) => {
    return deleteAuthor(context.db, args.id);
  },
  deleteBook: (parent, args, context) => {
    return deleteBook(context.db, args.id);
  }
};

module.exports = mutation;
