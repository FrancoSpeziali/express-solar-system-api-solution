import express from "express";

import satelliteRouter from "./routes/satellite.js";
import planetRouter from "./routes/planets.js";

const app = express();

// Remember: The order of your middleware is very important!
app.use("/satellite", satelliteRouter);
app.use("/planets", planetRouter);

app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
