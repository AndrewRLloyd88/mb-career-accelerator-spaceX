// Imports
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Bootstrap layout components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// React-Bootstrap components
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

interface AppProps { }

function App({ }: AppProps) {
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
            className='main-carousel'
            fade={true}
            indicators={false}
            interval={10000}
          >
            <Carousel.Item>
              <Container fluid>
                <Row>
                  <Col
                    xs={12} md={6}
                    className='rocket-container'
                  >
                    Rocket
                    <Image
                      src='./images/Falcon_9_Block_5_landing.png'
                    />
                  </Col>
                  <Col
                    xs={12} md={6}
                    className='launch-container'
                  >
                    Launch
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container fluid>
                <Row>
                  <Col
                    xs={12} md={6}
                    className='rocket-container'
                  >
                    Rocket
                    <Image
                      src='./images/Falcon_9_Block_5_landing.png'
                    />
                  </Col>
                  <Col
                    xs={12} md={6}
                    className='launch-container'
                  >
                    Launch
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}

export default App;
