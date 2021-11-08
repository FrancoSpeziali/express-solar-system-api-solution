const express = require('express');
const cors = require('cors');
const app = express();
const satelliteRoutes = require('./routes/satellite');
const planetRoutes = require('./routes/planets');

// Remember: The order of your middleware is very important!

// We use CORS() library to insert CORS related headers into the request object
app.use(cors());

app.use("/satellite", satelliteRoutes);
app.use("/planets", planetRoutes);

app.listen(3001, () => {
    console.log("The server is listening... 🐒")
});
