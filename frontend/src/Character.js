import React, { useEffect, useState } from "react";

function Character(props) {
  const id = props.location.state.id;
  const [character, setCharacter] = useState({});
  const [planet, setPlanet] = useState({});
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(`/api/characters/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));

    fetch(`/api/characters/${id}/planet`)
      .then((response) => response.json())
      .then((data) => setFilms(data));

    fetch(`/api/characters/${id}/films`)
      .then((response) => response.json())
      .then((data) => setFilms(data));
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <h2>Planet: {planet.name}</h2>
      <h3>Films:</h3>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Character;
