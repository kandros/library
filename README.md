# Project - Book Library 
Self Study back-end project based on _postgres_ and _graphql_.

## Stack
* postgres
* node
* graphql

## Setting up database to test the project
1) `git clone https://github.com/Volchok00/library.git`
1) Enter the project folder and install all the dependencies with `npm install` 
2) You must have _Postgres_ installed and running on your local machine
3) Use file library.pgsql to import database on your local postgres db
4) Make sure to replace the connectionString with your db name(in case you've changed it) and your password in `index.js`:
`const connectionString = `postgres://postgres:your_psw@localhost/your_db_name`;`

**In case you have trouble importing dump please follow these rules:**
1) create a new DB in your postgres account calling library and add the following queries into psql terminal to create new tables inside of your newly created "library" db:

-- Authors Table ----------------------------------------------

`CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name text
)`;

-- Books Table ----------------------------------------------

`CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title text
)`;

-- Bridge Table ----------------------------------------------

`CREATE TABLE bridge( 
    id SERIAL PRIMARY KEY
    authorid integer REFERENCES authors(id) ON DELETE CASCADE,
    booksid integer REFERENCES books(id) ON DELETE CASCADE,
  )
;

 -------------------------------------------------------------
 
2) Once you have done with your db structure please open the project folder and go to fakedata.js.
3) Make sure to replace the connectionString with your db name(in case you've changed it) and your password in:
`const connectionString = `postgres://postgres:${config.psw}@localhost/library`;` 
4) Once you are done run `node fakedata.js` in the terminal to populate your db tables with random data. Be sure all the dependencies for this project have already been installed. 

## How to run

1) the server has been set to run on PORT 4006, you can change this in `index.js` file
2) Please be sure once again to have all the dependencies installed
3) run `npm start`in the project root folder
4) now you can test some queries in graphiql playground. These are some of the queries you can test:

* The many to many books to authors relationship and vice versa:
`{
  books {
    title
    authors{
      name
    }
  }
}`

* AddBook and AddAuthor mutation

`mutation{
  addBook(title: "Harry Potter"){
    id
  }
}`

`mutation{
  addAuthor(name: "J. K. Rowling"){
    id
  }
}
`
* Add Connection between Author and Book

`mutation{
  addLink(authorid: 153, booksid: 152){
    id
  }
}`

* Delete Author or Book

`mutation{
  deleteAuthor(id: 153){
    id
  }
}`

`mutation{
  deleteBook(id: 152){
    id
  }
}`

## Folder structure
* index.js
* fakedata.js
* resolvers
  * Author.js
  * Book.js
  * Mutation.js
  * Query.js
  * index.js
* typeDefs
  * index.js
* secret.js
* utils
  * Author.js
  * Book.js
  * Query.js
  * index.js
* package.json
* package-lock.json
