import React, { Component } from "react";

import { Accordion, Button, Card } from "react-bootstrap";
export default class About extends Component {
  render() {
    return (
      <>
        <div className="[ container ]">
          <div className="[ row ][ aboutWelcome ]">
            <div className="[ col-sm-12 ]">
              <h1> ABOUT </h1>
            </div>
          </div>
          <div className="[ about-content ]">
            <div className="row">
              <div className="col-sm-12">
                <Accordion>
                  <Card>
                    <Card.Header>
                      <p>
                        Rick and Morty is an American adult animated science
                        fiction sitcom created by Justin Roiland and Dan Harmon
                        for Cartoon Network's late-night programming block Adult
                        Swim. The series follows the misadventures of cynical
                        mad scientist Rick Sanchez and his good-hearted but
                        fretful grandson Morty Smith, who split their time
                        between domestic life and interdimensional adventures.
                        Roiland voices the eponymous characters, with Chris
                        Parnell, Spencer Grammer and Sarah Chalke voicing the
                        rest of the family. The series originated from an
                        animated short parody film of Back to the Future,
                        created by Roiland for Channel 101, a short film
                        festival co-founded by Harmon. The series has been
                        acclaimed by critics for its originality, creativity and
                        humor. The series has been picked up for an additional
                        seventy episodes over an unspecified number of seasons,
                        beginning with season 4. The fourth season premiered on
                        November 10, 2019 and will consist of ten episodes.
                      </p>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey="0"
                        className="toggle"
                      >
                        Read More:
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                          Rick is an eccentric and alcoholic mad scientist, who
                          eschews many ordinary conventions such as school,
                          marriage, love, and family. He frequently goes on
                          adventures with his 14-year-old grandson, Morty, a
                          kind-hearted but easily distressed boy, whose naïve
                          but grounded moral compass plays counterpoint to
                          Rick's Machiavellian ego. Morty's 17-year-old sister,
                          Summer, is a more conventional teenager who worries
                          about improving her status among her peers and
                          sometimes follows Rick and Morty on their adventures.
                          The kids' mother, Beth, is a generally level-headed
                          person and assertive force in the household, though
                          self-conscious about her professional role as a horse
                          surgeon. She is dissatisfied with her marriage to
                          Jerry, a simple-minded and insecure person, who
                          disapproves of Rick's influence over his family.
                          Different versions of the characters inhabit other
                          dimensions throughout the multiverse and their
                          personal characteristics can vary from one reality to
                          another. The show's original Rick identifies himself
                          as "Rick Sanchez of Earth Dimension C-137", in
                          reference to his original universe, but this does not
                          necessarily apply to every other member of the Smith
                          household. For instance, in the first-season episode
                          "Rick Potion #9", after turning the entire world
                          population into monsters, Rick and Morty move to a
                          different dimension, leaving Summer, Beth and Jerry
                          behind.
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
