const express = require('express');
const app = express();
const satelliteRoutes = require('./routes/satellite');
const planetRoutes = require('./routes/planets');

app.use("/satellite", satelliteRoutes);
app.use("/planets", planetRoutes);

app.listen(3001, () => {
    console.log("The server is listening... 🐒")
});
