// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

// Components
import Rocket from './Rocket';
import Core from './Core';
import Fairing from './Fairing';

// React-Bootstrap Layout components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// React-Bootstrap Components
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

interface AppProps {}

function App({}: AppProps) {
  const [launchSlides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/launches')
      .then((response) => setSlides(response.data))
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
            interval={10000}
          >
            {launchSlides.map((launch: any) => (
              <Carousel.Item key={launch.id}>
                <Container fluid>
                  <Row>
                    {/* Rocket Column */}
                    <Col xs={12} md={6} className="rocket-container">
                      Rocket
                      <Image src="./images/Falcon_9_Block_5_landing.png" />
                      <Rocket id={launch.rocket} />
                      {/* Cores */}
                      {/* Does a Core id exist for this flight? */}
                      {launch.cores[0].core && (
                        <Row>
                          Cores
                          <Core coreObj={launch.cores[0]} />
                        </Row>
                      )}
                      {/* Fairings */}
                      {launch.fairings && (
                        <div>
                          <p>Fairings:</p>
                          <Fairing fairingObj={launch.fairings} />
                        </div>
                      )}
                    </Col>
                    {/* Launch Column */}
                    <Col xs={12} md={6} className="launch-container">
                      Launch
                      <div>Name: {launch.name}</div>
                      <div>Details: {launch.details}</div>
                      <div>Flight Number: {launch.flight_number}</div>
                      <div>Date: {launch.date_local}</div>
                      <div>Launch ID: {launch.id}</div>
                      {/* <div>Success: {launch.success.toString()}</div> */}
                      <div>
                        Success:{' '}
                        {launch.success === null
                          ? 'Not available'
                          : launch.success.toString()}
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
