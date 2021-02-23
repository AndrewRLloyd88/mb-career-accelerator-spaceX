import React, { useState, useEffect } from 'react';

//import types
import type { LaunchCoreInfo } from './types/LaunchCoreInfo';
import type { CoreSpecificInfo } from './types/CoreSpecificInfo';

//import classes
import { GetLaunchComponents } from './classes/GetLaunchComponents';

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
      <div>
        <div>Block: {thisCore.block}</div>
        <div>Reuse Count:{thisCore.reuse_count}</div>
        <div>RTLS Attempts: {thisCore.rtls_attempts}</div>
        <div>RTLS Landings: {thisCore.rtls_landings}</div>
        <div>ASDS Attempts:{thisCore.asds_attempts}</div>
        <div>ASDS Landings: {thisCore.asds_landings}</div>
        <div>Last Update:{thisCore.last_update}</div>
        {thisCore.launches && (
          <div>
            <p>Launches:</p>
            {thisCore.launches.map((launch) => {
              return <div>{launch}</div>;
            })}
          </div>
        )}
        <div>Serial: {thisCore.serial}</div>
        <div>Status: {thisCore.status}</div>
        <div>ID: {thisCore.id}</div>
      </div>
    )
  );
};

export default Core;
