function getAuthors(db) {
  const query = 'SELECT * from authors';
  const authors = db.query(query).then(res => {
    return res.rows;
  });
  return authors;
}
function addLink(db, authorid, booksid) {
  const query = 'insert into bridge (authorid, booksid) values($1,$2)';
  const values = [authorid, booksid];
  const authors = db.query(query, values).then(res => {
    return res.rows;
  });
  return authors;
}

function getAuthorById(db, id) {
  const query = `SELECT * from authors WHERE id=${id}`;
  var author = db.query(query).then(res => {
    return res.rows[0];
  });
  return author;
}

module.exports = {
  getAuthors,
  getAuthorById,
  addLink
};
