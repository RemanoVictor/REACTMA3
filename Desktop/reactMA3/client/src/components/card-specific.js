import React from "react";

const Cardspecific = props => {
  return (
    <div className="[ col-sm-8 ] [ card ] [ card-specific ]">
      <h3> Name: {props.name} </h3>
      <img src={props.img} alt="just random" className="[ CardImg ]" />
      <p>Located: {props.location} </p>
      <p>created:{props.created}</p>
    </div>
  );
};

export default Cardspecific;
