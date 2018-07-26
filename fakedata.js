const config = require('./secret.js');
const connectionString = `postgres://postgres:${config.psw}@localhost/blog-app`;
const {Client} = require('pg');
const {getUsers} = require('./utils');
const {addPost} = require('./utils');
const {addUser} = require('./utils');
const {getPosts} = require('./utils');
const {addComment} = require('./utils');
var casual = require('casual');

const dbClient = new Client({
  connectionString: connectionString
});

dbClient.connect().then(() => {
  addUser(dbClient, casual.first_name, casual.email, casual.password).then(
    res => res
  );
  getUsers(dbClient)
    .then(res => {
      res.forEach(el => {
        addPost(dbClient, casual.title, casual.text, el.id).then(res => res);
      });
    })
    .catch(err => console.log(err));

  getUsers(dbClient)
    .then(res => {
      res.forEach(el => {
        getPosts(dbClient).then(res => {
          res.forEach(posts => {
            addComment(dbClient, casual.text, el.id, posts.id).then(res => res);
          });
        });
      });
    })
    .catch(err => console.log(err));
});

console.log(casual.time((format = 'YYYY-MM-DD')));
