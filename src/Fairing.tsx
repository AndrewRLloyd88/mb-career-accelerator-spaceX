import React from 'react';

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
    <div>
      <div>Reused: {reused ? 'Reused' : 'Not Reused'}</div>
      <div>Recovery Attempt: {recovery_attempt ? 'Yes' : 'No'}</div>
      <div>Recovered: {recovered ? 'Yes' : 'No'}</div>
      <div>
        {/* Eventually Cross Reference This Data with Ship Name/Info */}
        {ships.map((ship) => {
          return (
            <div>
              Ships:
              <p>{ship}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fairing;
