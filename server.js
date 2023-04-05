const express = require('express');
const PORT = process.env.PORT || 3000;
const api_routes = require('./routes/api_routes');
const view_routes = require('./routes/html_routes');

const app = express();

// For POST and PUT requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Routing
app.use('/', api_routes);
app.use('/', view_routes);

app.listen(PORT, () => {
  console.log('Server running on %s', PORT);
});
