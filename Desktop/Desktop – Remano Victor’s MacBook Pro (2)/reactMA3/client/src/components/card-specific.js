import React from "react";

const Cardspecific = props => {
  return (
    <div className="[ col-sm-6 ] [ card ]">
      <h3> {props.name} </h3>
      <img src={props.img} alt="just random" className="[ CardImg ]" />
      <p> {props.gender} </p>
    </div>
  );
};

export default Cardspecific;
