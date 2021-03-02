import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import types
import type {
  RocketSpecificInfo,
  RocketPayload,
} from '../types/RocketSpecificInfo';

//import classes
import { GetLaunchComponents } from '../classes/GetLaunchComponents';

//our expected props for this component
interface Props {
  id: string;
}

const rocket = (props: Props) => {
  const [rocket, setRocket] = useState<RocketSpecificInfo>({
    status: 'loading',
    payload: {} as RocketPayload,
  });
  const service = rocket.status;
  const type = 'rockets';
  const id = props.id;

  //every time page updates get the corresponding rocket info
  useEffect(() => {
    //Instantiate RocketInfo as a new GetRocketSpecifics with typed as RocketPayload(the expected return object)
    const rocketInfo = new GetLaunchComponents<RocketPayload>(type, id);
    //call get() method on instance of GetRocketSpeifics
    rocketInfo.get().then((response) => {
      //store data in state
      setRocket({ status: 'loaded', payload: response });
    });
  }, []);

  return (
    <>
      {service === 'loading' && <div>Loading...</div>}
      {service === 'loaded' && (
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Rocket Info
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div>Name: {rocket.payload.name}</div>
                <div>Type: {rocket.payload.type}</div>
                <div>Active: {rocket.payload.active}</div>
                <div>Stages: {rocket.payload.stages}</div>
                <div>Boosters: {rocket.payload.boosters}</div>
                <div>Cost Per Launch: {rocket.payload.cost_per_launch}</div>
                <div>Success Rate: {rocket.payload.success_rate_pct}</div>
                <div>First Flight: {rocket.payload.first_flight}</div>
                <div>Country: {rocket.payload.country}</div>
                <div>Company: {rocket.payload.company}</div>
                <div>Wikipedia Information: {rocket.payload.wikipedia}</div>
                <div>Payload Description: {rocket.payload.description}</div>
                <div>Payload ID: {rocket.payload.id}</div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
      {service === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default rocket;
