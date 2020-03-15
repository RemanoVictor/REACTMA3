import React from "react";

const Cardspecific = props => {
  return (
    <div className="[ col-sm-8 ] [ card ]">
      <h3> Name: {props.name} </h3>
      <img src={props.img} alt="just random" className="[ CardImg ]" />
      <p> Location: {props.location} </p>
      <p>Created: {props.created}</p>
    </div>
  );
};

export default Cardspecific;
