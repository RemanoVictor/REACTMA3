import React, { Component } from "react";
import axios from "axios";

import { RICK_API } from "../constants/constant";
import Cards from "./../components/cards";

export default class Home extends Component {
  state = {
    cardData: undefined,
    filteredResults: [],
    isResultsFiltered: false,
    searchPhrase: ""
  };

  componentDidMount() {
    axios.get(RICK_API).then(response => {
      this.setState({
        cardData: response.data.results
      });
    });
  }

  handleFiltering = input => {
    const { cardData } = this.state;
    let filteredCards = cardData.filter(value => {
      return value.name
        .toLowerCase()
        .includes(input.target.value.toLowerCase());
    });
    this.setState({
      filteredResults: filteredCards,
      searchPhrase: input.target.value,
      isResultsFiltered: true
    });
  };

  render() {
    const {
      cardData,
      filteredResults,
      isResultsFiltered,
      searchPhrase
    } = this.state;

    return (
      <div>
        <div className="[ container-fluid ][ landingPage ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              <h1 className="[ welcomeHeading ]">RICK AND MORTY</h1>
            </div>
          </div>
        </div>

        <div className="[ container ][ blogPage ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              <form>
                <p>Like, Pick a card Morty</p>
                <input
                  type="text"
                  name="username"
                  onChange={this.handleFiltering}
                  className="form-control"
                />
                <br />
                <br />
              </form>
            </div>
          </div>

          <div className="row">
            {isResultsFiltered ? (
              <div>
                <h1>Filtered Results for {searchPhrase}</h1>
                {filteredResults.length > 0 ? (
                  filteredResults.map((value, index) => {
                    return (
                      <Cards
                        key={index}
                        id={value.id}
                        name={value.name}
                        img={`${value.image}`}
                        gender={value.gender}
                        species={value.species}
                        status={value.status}
                      />
                    );
                  })
                ) : (
                  <div>No Results</div>
                )}
              </div>
            ) : (
              <>
                {cardData !== undefined ? (
                  cardData.map((value, index) => {
                    return (
                      <Cards
                        key={index}
                        id={value.id}
                        name={value.name}
                        img={`${value.image}`}
                        gender={value.gender}
                        species={value.species}
                        status={value.status}
                      />
                    );
                  })
                ) : (
                  <div></div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
