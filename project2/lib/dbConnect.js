//this file is derived from the user-auth exercise provided by Rafa Pacas (@rapala61) and Bobby King (@gittheking) at General Assembly.

const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/surroundSound';

//getDB function stores mongo connection so we can use this shortcut elsewhere

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB,
};
