// Imports
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import './App.css'; /* Override react-bootstrap styling */
import './Spinner.css';

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
import Spinner from './components/Spinner';

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
        //options needed for images
        options: {
          populate: [
            {
              path: 'rocket',
              select: {
                name: 1,
              },
            },
          ],
          sort: {
            date_utc: 'desc',
          },
          limit: 500,
        },
      })
      .then((response: AxiosResponse) => {
        // console.log(response.data.docs);
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
          <h1 className="app-name justify-content-center">SpaceXploration</h1>
        </Row>

        {/* Main Body and Carousel */}
        {launchSlides.length !== 0 ? (
          <Row>
            <Carousel
              className="main-carousel"
              fade={true}
              indicators={false}
              interval={null}
            >
              {launchSlides.map((launch: LaunchObject, idx) => (
                <Carousel.Item key={launch.id}>
                  <Container fluid>
                    <Row>
                      {/* Rocket Column */}
                      <Col
                        xs={{ span: 12, order: 2 }}
                        md={{ span: 7, order: 1 }}
                        className="rocket-column"
                      >
                        <Row>
                          <Col
                            xs={{ span: 12, order: 2 }}
                            md={{ span: 10, order: 1 }}
                          >
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
                            <Rocket id={launch.rocket.id} />
                          </Col>

                          <Col
                            xs={{ span: 12, order: 1 }}
                            md={{ span: 2, order: 2 }}
                          >
                            {/* Rocket Image */}
                            <RocketImage
                              rocketName={launch.rocket.name}
                              flightNumber={launch.flight_number}
                            />
                          </Col>
                        </Row>
                      </Col>

                      {/* Launch Column */}
                      <Col
                        xs={{ span: 12, order: 1 }}
                        md={{ span: 5, order: 2 }}
                        className="launch-column"
                      >
                        <div className="mission-container">
                          <div className="mission-name-container">
                            <div>Mission Name:</div>
                            <div className="mission-name">{launch.name}</div>
                          </div>
                          {launch.details && (
                            <div>Details: {launch.details}</div>
                          )}
                          <div>Flight Number: {launch.flight_number}</div>
                          <div>
                            Date: {new Date(launch.date_local).toDateString()}
                          </div>
                          {launch.success ? (
                            <div>
                              Success:{' '}
                              <span className="success">
                                {'Mission Accomplished'}
                              </span>
                            </div>
                          ) : (
                            <div>
                              Success:{' '}
                              <span className="failure">
                                {'Mission Failed'}
                              </span>
                            </div>
                          )}
                        </div>
                        {launch.links.patch.large && (
                          <Image
                            className="launch-patch"
                            src={launch.links.patch.large}
                          />
                        )}
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
        ) : (
          <Row>
            <Carousel
              className="main-carousel"
              fade={true}
              indicators={false}
              interval={null}
            >
              <h1>LOADING...</h1>
              <Spinner />
            </Carousel>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
