const {getAuthors, getAuthorById} = require('./Query');
const {getBooksOfAuthor, addAuthor} = require('./Author');
const {getAuthorsOfBook, getBookById, getBooks, addBook} = require('./Book');
module.exports = {
  getAuthors,
  getAuthorById,
  getBooksOfAuthor,
  getAuthorsOfBook,
  getBooks,
  getBookById,
  addAuthor,
  addBook
};
