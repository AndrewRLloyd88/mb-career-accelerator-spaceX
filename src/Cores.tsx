import React from 'react';
import type { FlightCoreInfo } from './types/FlightCoreInfo';

interface Props {
  id: FlightCoreInfo;
}

const Cores = (props: Props) => {
  const {
    core,
    flight,
    gridfins,
    legs,
    reused,
    landing_attempt,
    landing_success,
    landing_type,
    landpad,
  } = props.id;
  console.log(props);
  return <div>{core}</div>;
};

export default Cores;
