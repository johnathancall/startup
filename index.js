const express = require('express');
const app = express();
const db = require('./database.js');

// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Text to display for the service name
const serviceName = process.argv.length > 3 ? process.argv[3] : 'website';

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

apiRouter.post('/website/', (req, res) => {
  websites = updateWebsites(req.body, websites);
  res.send(websites);
});

apiRouter.get('/login/', (req, res) => {
  res.send(db.getUser((req.query.username, req.query.password));
});

apiRouter.get('/register/', (req, res) = {
  res.send(db.addUser(req.query.username, req.query.password));
});

// Return the homepage if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Handling website updates
let websites = db.getWebsites('test');
function updateWebsites(newWebsite, websites) {
  websites.push(newWebsite);
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
