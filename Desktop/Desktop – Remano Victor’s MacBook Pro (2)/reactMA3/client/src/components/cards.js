import React from "react";
import { Link } from "react-router-dom";

const Cards = props => {
  return (
    <div className="[ col-sm-3 ] [ card ]">
      <h3> {props.name} </h3>
      <img src={props.img} alt="just random" className="[ CardImg ]" />
      <p> {props.gender} </p>
      <Link to={`/CardSpecific/${props.id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
};

export default Cards;
