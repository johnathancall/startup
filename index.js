const express = require('express');
const app = express();
const db = require('./database.js');

// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Text to display for the service name
const serviceName = process.argv.length > 3 ? process.argv[3] : 'website';

app.use(express.json());

// Serve up the static content
app.use(express.static('public'));

// Provide the version of the application
app.get('/config', (_req, res) => {
  res.send({ version: '20221228.075705.1', name: serviceName });
});

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/websites', (req, res) => {
  res.send(websites);
});

apiRouter.post('/website/', async (req, res) => {
  websites = await updateWebsites(req.body.name, websites);
  console.log(req.body.username);
  db.addWebsite(req.body.username, req.body.name);
  res.send(websites);
});

apiRouter.post('/login/', async (req, res) => {
  console.log('login');
  res.send(await db.getUser((req.query.username, req.query.password)));
});

apiRouter.post('/register/', async (req, res) => {
  console.log('register');
  await db.addUser(req.query.username, req.query.password);
  console.log('after');
  res.sendStatus(200);
});

// Return the homepage if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Handling website updates
let websites = [];
function updateWebsites(newWebsite, websites) {
  websites.push(newWebsite);
  return websites;
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
