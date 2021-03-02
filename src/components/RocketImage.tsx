import React from 'react';

interface Props {
  name: string;
}

const RocketImage = (props: Props) => {
  return (
    <>
      <img
        className="rocket-image"
        src="./images/Falcon_9_Block_5_landing.png"
      ></img>
    </>
  );
};

export default RocketImage;
