const {addAuthor, addSingleBook} = require('../utils');

const mutation = {
  addAuthor: (parent, args, context) => {
    return addAuthor(context.db, args.name);
  },
  addBook: (parent, args, context) => {
    return addSingleBook(context.db, args.title, args.id);
  }
};

module.exports = mutation;
