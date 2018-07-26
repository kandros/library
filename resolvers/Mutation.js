const {addAuthor, addBook, addLink} = require('../utils');

const mutation = {
  addAuthor: (parent, args, context) => {
    return addAuthor(context.db, args.name);
  },
  addBook: (parent, args, context) => {
    return addBook(context.db, args.title, args.id);
  },
  addLink: (parent, args, context) => {
    return addLink(context.db, args.authorid, args.postid, args.id);
  }
};

module.exports = mutation;
