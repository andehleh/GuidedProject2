const express = require("express");
const app = express();
const port = 3000;

app.get("/api/planets", (req, res) => {
  res.json({
    id: 1,
    climate: "arid",
    surface_water: "1",
    name: "Tatooine",
    diameter: "10465",
    rotation_period: "23",
    terrain: "desert",
    gravity: "1 standard",
    orbital_period: "304",
    population: "200000",
  });
});

app.listen(port);
