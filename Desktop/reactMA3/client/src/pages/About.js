import React, { Component } from "react";

import { Accordion, Button, Card } from "react-bootstrap";
export default class About extends Component {
  render() {
    return (
      <>
        <div className="[ container ]">
          <div className="[ row ][ profileWelcome ]">
            <div className="[ col-sm-12 ]">
              <h2> About </h2>
            </div>
          </div>
          <div className="[ row ] [ About ]">
            <div className="[ col-md-12]">
              <h4> Rick and Morty </h4>
              <p>
                Rick and Morty is an American adult animated science fiction
                sitcom created by Justin Roiland and Dan Harmon for Cartoon
                Network's late-night programming block Adult Swim. The series
                follows the misadventures of cynical mad scientist Rick Sanchez
                and his good-hearted but fretful grandson Morty Smith, who split
                their time between domestic life and interdimensional
                adventures.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Read More:
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                          Roiland voices the eponymous characters, with Chris
                          Parnell, Spencer Grammer and Sarah Chalke voicing the
                          rest of the family. The series originated from an
                          animated short parody film of Back to the Future,
                          created by Roiland for Channel 101, a short film
                          festival co-founded by Harmon. The series has been
                          acclaimed by critics for its originality, creativity
                          and humor. The series has been picked up for an
                          additional seventy episodes over an unspecified number
                          of seasons, beginning with season 4. The fourth season
                          premiered on November 10, 2019 and will consist of ten
                          episodes.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
