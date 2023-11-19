const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addUser(username, password) {
  testConnection();
  const result = await db.collection('test');
  return result;
}

async function addWebsite(username, website) {
  const result = await db.collection('test').insertOne(website);
  return result;
}

async function getUser(username, password) {
  const result = await db.collection('test');
  return result;
}

async function getWebsites(username) {
  const result = await db.collection('test');
  return result;
}

module.exports = { addScore, getHighScores };
