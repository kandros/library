const {ApolloServer} = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const config = require('./secret.js');

const {Client} = require('pg');
const connectionString = `postgres://postgres:${config.psw}@localhost/library`;

const dbClient = new Client({
  connectionString: connectionString
});

dbClient.connect().then(() => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      db: dbClient
    }
  });

  server.listen(4006).then(({url}) => {
    console.log(`Server ready at ${url}`);
  });
});
