import React from 'react';

// import react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ship from './Ship';

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
        {/* Change Card.Header to div for more flexibility */}
        <div className="accordion-header">
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Fairings
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <div>Reused: {reused ? 'Reused' : 'Not Reused'}</div>
            <div>Recovery Attempt: {recovery_attempt ? 'Yes' : 'No'}</div>
            <div>Recovered: {recovered ? 'Yes' : 'No'}</div>
            {ships.length !== 0 && (
              <div>
                Fairing Recovery Ships:
                {ships.map((ship, id) => {
                  return <Ship key={id} ship={ship} />;
                })}
              </div>
            )}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Fairing;
