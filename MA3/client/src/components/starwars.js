import React from "react";

const StarWars = props => {
  return (
    <div className="[ col-sm-3 ] [ card ]">
      <h3>Name: {props.name} </h3>
      <p>height:{props.height} </p>
      <p>Gender: {props.skin} </p>
      <p>Species: {props.species}</p>
      <p>Birth Year: {props.dob}</p>
      <p>Eye Color: {props.eyeColor}</p>
    </div>
  );
};

export default StarWars;
