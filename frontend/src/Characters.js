import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/api/characters")
      .then((reponse) => Response.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <ul>
          <div key={character.id}>
            <Link
              to={{
                pathname: `/character/${character.id}`,
                state: { id: character.id },
              }}
            >
              {character.name}
            </Link>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default Characters;
