function getAuthorsOfBook(db, id) {
  const query = `select  *
  from authors inner join bridge on authors.id = bridge.authorid
  inner join books on bridge.booksid=books.id 
  WHERE bridge.booksid = ${id}`;
  const authors = db.query(query).then(res => {
    return res.rows;
  });
  return authors;
}
function getBooks(db) {
  const query = 'SELECT * from books';
  const books = db.query(query).then(res => {
    return res.rows;
  });
  return books;
}

function getBookById(db, id) {
  const query = `SELECT * from books WHERE id=${id}`;
  var books = db.query(query).then(res => {
    return res.rows[0];
  });
  return books;
}

function addSingleBook(db, title) {
  const query = `INSERT into books values ($1, $2) returning *`;
  const values = [title, Math.floor(Math.random() * 200)];
  const newBook = db.query(query, values).then(res => {
    return res.rows[0];
  });
  return newBook;
}

module.exports = {
  getAuthorsOfBook,
  getBookById,
  getBooks
};
