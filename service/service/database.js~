const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const websiteCollection = db.collection('websites');
const userCollection = db.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    name: username,
    password: passwordHash,
    token: uuid.v4(),
  }
  await userCollection.insertOne(user);
  return user;
}

async function addWebsite(username, website) {
  const result = await websiteCollection.insertOne({name: username, site: website});
  return result;
}

async function getUser(username, password) {
  return userCollection.findOne({name: username});
}


function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function getWebsites(username) {
  try {
    const result = await websiteCollection.find({"name": username}).toArray();
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function removeWebsite(username, website) {
  const deleteQuery = {name: username, site: website};

  try {
    const result = await websiteCollection.deleteOne(deleteQuery);
    console.log(deleteQuery);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = {addUser, addWebsite, getUser, getUserByToken, getWebsites, removeWebsite};
