import React from 'react';

// import react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface Props {
  fairingObj: {
    reused: false;
    recovery_attempt: true;
    recovered: false;
    ships: string[];
  };
}

const Fairing = (props: Props) => {
  const { reused, recovery_attempt, recovered, ships } = props.fairingObj;
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Fairings
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <div>Reused: {reused ? 'Reused' : 'Not Reused'}</div>
            <div>Recovery Attempt: {recovery_attempt ? 'Yes' : 'No'}</div>
            <div>Recovered: {recovered ? 'Yes' : 'No'}</div>
            <div>
              {/* Eventually Cross Reference This Data with Ship Name/Info */}
              {ships.map((ship, id) => {
                return (
                  <div key={id + 0}>
                    Ships:
                    <p key={id + ship}>{ship}</p>
                  </div>
                );
              })}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Fairing;
