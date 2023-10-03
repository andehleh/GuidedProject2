const express = require( "express");
const app = express();
const port = 3000;
const characterRouter =  require("./controller");


app.use("/api/planets", characterRouter);

app.listen(port);
