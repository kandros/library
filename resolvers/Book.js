const {getAuthorsOfBook} = require('../utils');

const query = {
  authors: (parent, args, context) => {
    return getAuthorsOfBook(context.db, parent.id);
  }
};

module.exports = query;
