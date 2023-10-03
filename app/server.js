const express = require("express");
const app = express();
const port = 3000;
const characterRouter = require("./routes");

app.use("/api/characters", characterRouter);

app.listen(port);
