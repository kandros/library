const {getBooksOfAuthor} = require('../utils');

const query = {
  books: (parent, args, context) => {
    return getBooksOfAuthor(context.db, parent.id);
  }
};

module.exports = query;
