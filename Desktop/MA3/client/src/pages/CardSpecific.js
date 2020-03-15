import React, { Component } from "react";

import axios from "axios";

import { RICK_API } from "./../constants/constant";

import Cardspecific from "./../components/card-specific";

export default class CardSpecific extends Component {
  state = {
    cardData: undefined
  };

  componentDidMount() {
    console.log("match" + this.props.match);
    axios.get(RICK_API + this.props.match.params.id).then(response => {
      console.log(response);
      this.setState({
        cardData: response.data
      });
    });
  }

  render() {
    const { cardData } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {cardData !== undefined ? (
              <Cardspecific
                id={cardData.id}
                name={cardData.name}
                img={`${cardData.image}`}
                gender={cardData.gender}
              />
            ) : (
              <div> No data </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
