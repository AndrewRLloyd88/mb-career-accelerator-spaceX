import React, { useState, useEffect } from 'react';

//import types
import type { FlightCoreInfo } from './types/FlightCoreInfo';
import type { CoreSpecificInfo } from './types/CoreSpecificInfo';

//import classes
import { GetRocketSpecifics } from './classes/GetRocketSpecifics';

interface Props {
  id: FlightCoreInfo;
}

const Cores = (props: Props) => {
  const [thisCore, setThisCore] = useState({} as CoreSpecificInfo);
  const type = 'cores';
  const { core } = props.id;

  useEffect(() => {
    //Instantiate CoreInfo as a new GetRocketSpecifics with type CoreSpecificInfo
    const coreInfo = new GetRocketSpecifics<CoreSpecificInfo>(type, core);
    coreInfo.get().then((data) => {
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

export default Cores;
