const express = require('express');

// Init the app
let app = express();

// Home Routing
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, (req, res) => {
  console.log("Connecting to port:3000 at http://localhost:3000")
})