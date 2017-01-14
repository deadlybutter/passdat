const console = require('keypunch');
const express = require('express');

const app = express();
app.use(express.static('public'))

const template = require('./lib/engine')();

app.get('*', (req, res) => {
  res.write(template);
  res.end();
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.info(`Listening on ${port}`);
});
