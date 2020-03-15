import React from "react";
import { Link } from "react-router-dom";

const Cards = props => {
  return (
    <div className="[ col-sm-3 ] [ card ]">
      <h3>Name: {props.name} </h3>
      <img src={props.img} alt="just random" className="[ CardImg ]" />
      <p>Gender {props.gender} </p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <Link to={`/CardSpecific/${props.id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
};

export default Cards;
