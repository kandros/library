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
  const query = `INSERT into authors values ($1, $2) returning *`;
  const values = [name, Math.floor(Math.random() * 200)];
  const newAuthor = db.query(query, values).then(res => {
    return res.rows[0];
  });
  return newAuthor;
}
module.exports = {
  getBooksOfAuthor,
  addAuthor
};
