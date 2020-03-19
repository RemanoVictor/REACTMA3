import React, { useState, useEffect } from "react";
import axios from "axios";

import { StarWars_API } from "../constants/constant";
import Starwars from "./../components/starwars";

export default function StarWars() {
  const [swcharacters, setswCharacters] = useState(undefined);

  useEffect(() => {
    axios.get(StarWars_API).then(swData => {
      console.log(swData.data.results);
      setswCharacters(swData.data.results);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {swcharacters !== undefined ? (
          swcharacters.map((value, index) => {
            return (
              <Starwars
                key={index}
                id={value.id}
                name={value.name}
                height={value.height}
                skin={value.skin}
                dob={value.birth_year}
                eyeColor={value.eye_color}
              />
            );
          })
        ) : (
          <div>Please Wait...</div>
        )}
      </div>
    </div>
  );
}
