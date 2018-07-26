const config = require('./secret.js');
const connectionString = `postgres://postgres:${config.psw}@localhost/library`;
const {Client} = require('pg');
const {addAuthor} = require('./utils');
const {addBook} = require('./utils');
const {getAuthors, getBooks} = require('./utils');

var casual = require('casual');

const dbClient = new Client({
  connectionString: connectionString
});

dbClient.connect().then(() => {
  for (var i = 0; i < 50; i++) {
    addAuthor(dbClient, casual.first_name).then(res => res);

    addBook(dbClient, casual.title)
      .then(res => res)
      .catch(err => console.log(err));
  }
});
