const express = require('express');
const PORT = 3000;

const app = express();

// For POST and PUT requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Routing
require("./routes/api.routes")(app);
require("./routes/html.routes")(app);

app.listen(PORT, () => {
  console.log('Server running on %s', PORT);
});
