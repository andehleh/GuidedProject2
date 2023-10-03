const express = require("express");
const app = express();
const port = 3000;
const routers = require("./routes");

app.use("/api/characters", routers.characterRouter);
app.use("/api/films", routers.filmsRouter);
app.use("/api/planets", routers.planetsRouter);
app.use("/api/characters/:id", routers.charactersIdRouter);
app.use("/api/films/:id", routers.filmsIdRouter);
app.use("/api/planets/:id", routers.planetsIdRouter);
app.use("/api/films/:id/characters", routers.filmsIdCharactersRouter);
app.use(
  "/api/films/:id/characters/:id/films",
  routers.filmsCharactersIdFilmsRouter
);
app.use("/api/planets/:id/films", routers.planetIdFilmsRouter);
app.use("/api/planets/:id/characters", routers.planetsIdCharactersRouter);

app.listen(port);
