import React from 'react';

// import react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ship from './Ship';
import Table from 'react-bootstrap/Table';

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
            Fairing
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Table>
              <tbody>
                <tr>
                  <td className="data-label" style={{ borderTop: 0 }}>
                    Reused:
                  </td>
                  <td className="data-value" style={{ borderTop: 0 }}>
                    {reused ? 'Reused' : 'Not Reused'}
                  </td>
                </tr>
                <tr>
                  <td className="data-label">Recovery Attempt:</td>
                  <td className="data-value">
                    {recovery_attempt ? 'Yes' : 'No'}
                  </td>
                </tr>
                <tr>
                  <td className="data-label">Recovered:</td>
                  <td className="data-value">{recovered ? 'Yes' : 'No'}</td>
                </tr>
                {ships.length !== 0 && (
                  <tr>
                    <td className="data-label">Fairing Recovery Ships:</td>
                    <td className="data-value">
                      {ships.map((ship, id) => {
                        return <Ship key={id} ship={ship} />;
                      })}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Fairing;
