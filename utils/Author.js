function getBooksOfAuthor(db, id) {
  const query = `select * 
  from authors inner join bridge on authors.id = bridge.authorid
  inner join books on bridge.booksid=books.id 
  WHERE bridge.authorid = ${id}`;
  const authors = db.query(query).then(res => {
    return res.rows;
  });
  return authors;
}
function addAuthor(db, name) {
  const query = `INSERT into authors (name) values ($1) returning *`;
  const values = [name];
  const newAuthor = db.query(query, values).then(res => {
    return res.rows[0];
  });
  return newAuthor;
}
function deleteAuthor(db, id) {
  const query = `DELETE from authors CASCADE WHERE id=${id}`;

  var authorDeleted = db.query(query).then(res => {
    console.log(res.rows[0]);
    return res.rows[0];
  });
  return authorDeleted;
}
module.exports = {
  getBooksOfAuthor,
  addAuthor,
  deleteAuthor
};
