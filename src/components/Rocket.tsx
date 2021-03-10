import React, { useState, useEffect } from 'react';

// import react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
            {/* Change Card.Header to div for more flexibility */}
            <div className="accordion-header">
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Rocket Info
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Table>
                  <tbody>
                    <tr>
                      <td className="data-label" style={{ borderTop: 0 }}>
                        Name:
                      </td>
                      <td className="data-value" style={{ borderTop: 0 }}>
                        {rocket.payload.name}
                      </td>
                    </tr>
                    <tr>
                      <td className="data-label">Type:</td>
                      <td className="data-value">{rocket.payload.type}</td>
                    </tr>
                    <tr>
                      <td className="data-label"> Active:</td>
                      <td className="data-value">
                        {rocket.payload.active ? 'Active' : 'Inactive'}
                      </td>
                    </tr>
                    <tr>
                      <td className="data-label">Stages:</td>
                      <td className="data-value">{rocket.payload.stages}</td>
                    </tr>
                    <tr>
                      <td className="data-label">Boosters:</td>
                      <td className="data-value">{rocket.payload.boosters}</td>
                    </tr>
                    <tr>
                      <td className="data-label">Cost Per Launch:</td>
                      <td className="data-value">
                        {rocket.payload.cost_per_launch.toLocaleString(
                          'en-US',
                          {
                            style: 'currency',
                            currency: 'USD',
                          },
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="data-label">Success Rate:</td>
                      <td className="data-value">
                        {rocket.payload.success_rate_pct}%
                      </td>
                    </tr>
                    <tr>
                      <td className="data-label">First Flight:</td>
                      <td className="data-value">
                        {rocket.payload.first_flight}
                      </td>
                    </tr>
                    <tr>
                      <td className="data-label">Country:</td>
                      <td className="data-value">{rocket.payload.country}</td>
                    </tr>
                    <tr>
                      <td className="data-label">Company:</td>
                      <td className="data-value">{rocket.payload.company}</td>
                    </tr>
                    <tr>
                      <td className="data-label">Wikipedia Information:</td>
                      <td className="data-value">
                        {' '}
                        <a href={rocket.payload.wikipedia} target="_blank">
                          {rocket.payload.wikipedia}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="data-label">Payload Description:</td>
                      <td className="data-value">
                        {rocket.payload.description}
                      </td>
                    </tr>
                  </tbody>
                </Table>
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
