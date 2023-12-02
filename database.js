const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const collection = db.collection('websites');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addUser(username, password) {
  return;
}

async function addWebsite(username, website) {
  console.log(website);
  console.log(username);
  const result = await collection.insertOne({name: username, site: website});
  console.log(result);
  return result;
}

async function getUser(username, password) {
  return;
}

async function getWebsites(username) {
  try {
    const result = await collection.find({"name": username}).toArray();
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = {addUser, addWebsite, getUser, getWebsites};
