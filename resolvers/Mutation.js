const {addAuthor, addBook} = require('../utils');

const mutation = {
  addAuthor: (parent, args, context) => {
    return addAuthor(context.db, args.name);
  },
  addBook: (parent, args, context) => {
    return addBook(context.db, args.title);
  }
};

module.exports = mutation;
