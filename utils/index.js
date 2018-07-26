const {getAuthors, getAuthorById, addLink} = require('./Query');
const {getBooksOfAuthor, addAuthor} = require('./Author');
const {
  getAuthorsOfBook,
  getBookById,
  getBooks,
  addSingleBook
} = require('./Book');
module.exports = {
  getAuthors,
  getAuthorById,
  getBooksOfAuthor,
  getAuthorsOfBook,
  getBooks,
  getBookById,
  addAuthor,
  addSingleBook,
  addLink
};
