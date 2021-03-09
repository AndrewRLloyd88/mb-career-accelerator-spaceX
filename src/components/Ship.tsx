import React, { useState, useEffect } from 'react';
//import types
import type { ShipSpecificInfo } from '../types/ShipSpecificInfo';
//import classes
import { GetLaunchComponents } from '../classes/GetLaunchComponents';

//parent props passed to component
interface Props {
  ship: string;
}

const Ship = (props: Props) => {
  const [ship, setShip] = useState<ShipSpecificInfo>({} as ShipSpecificInfo);
  const type = 'ships';
  const id = props.ship;

  //every time page updates get the corresponding rocket info
  useEffect(() => {
    //Instantiate RocketInfo as a new GetRocketSpecifics with typed as RocketPayload(the expected return object)
    const shipInfo = new GetLaunchComponents<ShipSpecificInfo>(type, id);
    //call get() method on instance of GetRocketSpeifics
    shipInfo.get().then((response) => {
      //store data in state
      setShip(response);
    });
  }, []);

  return (
    <div>
      Ship Name: <a href={ship.link} target="_blank">{ship.name}</a>
    </div>
  );
};

export default Ship;
