const express = require("express");
const app = express();
const port = 3000;
const { getCharacter, characterRouter } = require("./controller");

app.get("/api/character", async (req, res) => {
  const character = await getCharacter();
  res.json(character);
});

app.use("/api/characters", characterRouter);

app.listen(port);
