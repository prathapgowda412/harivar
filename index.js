const express = require('express');
const expressRoutes = require('./routes/expressRoutes');
const app = express();
const initializeMongodb = require('./config/db');
const port = 5001;

initializeMongodb();
expressRoutes(app);
app.listen(port, () => {
  console.log(`listening to port ${port} `);
});
