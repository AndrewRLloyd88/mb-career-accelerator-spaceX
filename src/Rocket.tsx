import React, { useState, useEffect } from 'react';
import axios from 'axios';

//our expected props for this component
interface Props {
  id: string;
}

//constructing all of the properties for a rocket
interface RocketInterface {
  status: string;
  payload: {
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    wikipedia: string;
    description: string;
    id: string;
  };
}

const rocket = (props: Props) => {
  const [rocket, setRocket] = useState<RocketInterface>({
    status: 'loading',
    payload: {
      name: '',
      type: '',
      active: false,
      stages: 0,
      boosters: 0,
      cost_per_launch: 0,
      success_rate_pct: 0,
      first_flight: '',
      country: '',
      company: '',
      wikipedia: '',
      description: '',
      id: '',
    },
  });
  const service = rocket.status;

  //every time page updates get the corresponding rocket info
  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/rockets/${props.id}`)
      .then((response) => response)
      .then((response) =>
        setRocket({ status: 'loaded', payload: response.data }),
      )
      .catch((error) => setRocket({ status: 'error', payload: error }));
  }, []);

  return (
    <>
      {service === 'loading' && <div>Loading...</div>}
      {service === 'loaded' && (
        <>
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
        </>
      )}
      {service === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default rocket;
