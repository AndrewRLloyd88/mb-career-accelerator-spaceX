// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import images
import falcon1 from './assets/falcon1.svg';
import falcon9v11a from './assets/falcon911a.svg';
import falcon9v11b from './assets/falcon911b.svg';
import falcon9v11c from './assets/falcon911c.svg';
import falcon9v12a from './assets/falcon912a.svg';
import falcon9v12b from './assets/falcon912b.svg';
import falcon9v12c from './assets/falcon912c.svg';
import falcon9block5a from './assets/falcon9block5a.svg';
import falcon9block5b from './assets/falcon9block5b.svg';
import falcon9block5c from './assets/falcon9block5c.svg';
import falconheavy from './assets/falconheavy.svg';
import falconheavyblock5 from './assets/falconheavyblock5.svg';

import './App.css';

// Import types
import type { LaunchesArray, LaunchObject } from './types/LaunchSpecificInfo';

// Components
import Rocket from './components/Rocket';
import Core from './components/Core';
import Fairing from './components/Fairing';
import RocketImage from './components/RocketImage';

// React-Bootstrap Layout components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// React-Bootstrap Components
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

interface AppProps {}

function App({}: AppProps) {
  // typeof launchSlides is expected to be array of LaunchObject's
  // Then set launchSlides initial state to empty array
  const [launchSlides, setSlides] = useState<LaunchObject[]>([]);

  useEffect(() => {
    axios
      .post('https://api.spacexdata.com/v4/launches/query', {
        query: {
          date_utc: {
            $lte: new Date(),
          },
        },
        options: {
          sort: {
            date_utc: 'desc',
          },
          limit: 1000,
        },
      })
      .then((response) => {
        console.log(response.data.docs);
        setSlides(response.data.docs);
      })
      .catch((error) => console.log('API error: ', error));
  }, []);

  // Return the App component.
  return (
    <div className="App">
      <Container fluid>
        {/* Header */}
        <Row>
          <h1>SpaceXploration</h1>
        </Row>

        {/* Main Body and Carousel */}
        <Row>
          <Carousel
            className="main-carousel"
            fade={true}
            indicators={false}
            interval={null}
          >
            {launchSlides.map((launch: any) => (
              <Carousel.Item key={launch.id}>
                <Container fluid>
                  <Row>
                    {/* Rocket Column */}
                    <Col xs={12} md={7} className="rocket-container">
                      {/* Fairings */}
                      {launch.fairings && (
                        <div>
                          <Fairing fairingObj={launch.fairings} />
                        </div>
                      )}
                      {/* Cores */}
                      {/* Does a Core id exist for this flight? */}
                      {launch.cores[0].core && (
                        <Core coreObj={launch.cores[0]} />
                      )}
                      {/* Rocket */}
                      <RocketImage name={launch.name} />
                      <Rocket id={launch.rocket} />
                    </Col>
                    {/* Launch Column */}
                    <Col xs={12} md={5} className="launch-container">
                      Launch
                      <div>Name: {launch.name}</div>
                      <div>Details: {launch.details}</div>
                      <div>Flight Number: {launch.flight_number}</div>
                      <div>Date: {launch.date_local}</div>
                      <div>Launch ID: {launch.id}</div>
                      {launch.success && (
                        <div>Success: {launch.success.toString()}</div>
                      )}
                      {launch.links.patch.large && (
                        <Image
                          className="launch-patch"
                          src={launch.links.patch.large}
                        />
                      )}
                      {/* Test Component for Rockets - Remove Me */}
                      <div className="rocket-display">
                        <div>
                          <img src={falcon1}></img>
                        </div>
                        <div>
                          <img src={falcon9v11a}></img>
                        </div>
                        <div>
                          <img src={falcon9v11b}></img>
                        </div>
                        <div>
                          <img src={falcon9v11c}></img>
                        </div>
                        <div>
                          <img src={falcon9v12a}></img>
                        </div>
                        <div>
                          <img src={falcon9v12b}></img>
                        </div>
                        <div>
                          <img src={falcon9v12c}></img>
                        </div>
                        <div>
                          <img src={falcon9block5a}></img>
                        </div>
                        <div>
                          <img src={falcon9block5b}></img>
                        </div>
                        <div>
                          <img src={falcon9block5c}></img>
                        </div>
                        <div>
                          <img src={falconheavy}></img>
                        </div>
                        <div>
                          <img src={falconheavyblock5}></img>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}

export default App;
