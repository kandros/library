const {getAuthors, getAuthorById, addLink} = require('./Query');
const {getBooksOfAuthor, addAuthor, deleteAuthor} = require('./Author');
const {
  getAuthorsOfBook,
  getBookById,
  getBooks,
  addSingleBook,
  deleteBook
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
  addLink,
  deleteBook,
  deleteAuthor
};
