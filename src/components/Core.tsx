import React, { useState, useEffect } from 'react';

// import react-bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

//import types
import type { LaunchCoreInfo } from '../types/LaunchCoreInfo';
import type { CoreSpecificInfo } from '../types/CoreSpecificInfo';

//import classes
import { GetLaunchComponents } from '../classes/GetLaunchComponents';

//Expected props from App.tsx
interface Props {
  coreObj: LaunchCoreInfo;
}

const Core = (props: Props) => {
  //state to hold the specific core in
  const [thisCore, setThisCore] = useState({} as CoreSpecificInfo);
  //add a type as GetRocketSpecifics expects it
  const type = 'cores';
  //destructure the core's ID out for GetRocketSpecifics
  const { core } = props.coreObj;

  useEffect(() => {
    //Instantiate CoreInfo as a new GetRocketSpecifics with type CoreSpecificInfo
    const coreInfo = new GetLaunchComponents<CoreSpecificInfo>(type, core);
    //call get() method on instance of GetRocketSpeifics
    coreInfo.get().then((data) => {
      //store data in state
      setThisCore(data);
    });
  }, []);

  return (
    thisCore && (
      <Accordion>
        <Card>
          {/* Change Card.Header to div for more flexibility */}
          <div className="accordion-header">
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Core
            </Accordion.Toggle>
          </div>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Table>
                <tbody>
                  <tr>
                    <td className="data-label" style={{ borderTop: 0 }}>
                      Serial:
                    </td>
                    <td className="data-value" style={{ borderTop: 0 }}>
                      {thisCore.serial}
                    </td>
                  </tr>
                  <tr>
                    <td className="data-label">Status:</td>
                    <td className="data-value">{thisCore.status}</td>
                  </tr>
                  <tr>
                    <td className="data-label">Block:</td>
                    <td className="data-value">{thisCore.block}</td>
                  </tr>
                  <tr>
                    <td className="data-label">Last Update:</td>
                    <td className="data-value">{thisCore.last_update}</td>
                  </tr>
                  <tr>
                    <td className="data-label">Reuse Count:</td>
                    <td className="data-value">{thisCore.reuse_count}</td>
                  </tr>
                  <tr>
                    <td className="data-label">
                      Return to Launch Site (RTLS) Attempts:
                    </td>
                    <td className="data-value">{thisCore.rtls_attempts}</td>
                  </tr>
                  <tr>
                    <td className="data-label">
                      Return to Launch Site (RTLS) Landings:
                    </td>
                    <td className="data-value">{thisCore.rtls_landings}</td>
                  </tr>
                  <tr>
                    <td className="data-label">
                      Autonomous Spaceport Drone Ship (ASDS) Landings:
                    </td>
                    <td className="data-value">{thisCore.asds_landings}</td>
                  </tr>
                  <tr>
                    <td className="data-label">
                      Autonomous Spaceport Drone Ship (ASDS) Attempts:
                    </td>
                    <td className="data-value">{thisCore.asds_attempts}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  );
};

export default Core;
