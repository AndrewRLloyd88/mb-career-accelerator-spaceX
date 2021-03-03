import React, { useEffect, useState } from 'react';

// Import images
import falcon1 from '../assets/falcon1.svg';
import falcon9v11a from '../assets/falcon911a.svg';
import falcon9v11b from '../assets/falcon911b.svg';
import falcon9v11c from '../assets/falcon911c.svg';
import falcon9v12a from '../assets/falcon912a.svg';
import falcon9v12b from '../assets/falcon912b.svg';
import falcon9v12c from '../assets/falcon912c.svg';
import falcon9block5a from '../assets/falcon9block5a.svg';
import falcon9block5b from '../assets/falcon9block5b.svg';
import falcon9block5c from '../assets/falcon9block5c.svg';
import falconheavy from '../assets/falconheavy.svg';
import falconheavyblock5 from '../assets/falconheavyblock5.svg';

interface Props {
  rocketName: string;
}

const RocketImage = (props: Props) => {
  const [image, setImage] = useState('');

  const setPicture = (rocketName: string) => {
    switch (rocketName) {
      case 'Falcon 1':
        return setImage(falcon1);

      case 'Falcon 9':
        return setImage(falcon9v11b);

      case 'Falcon Heavy':
        return setImage(falconheavy);

      default:
        break;
    }
  };

  useEffect(() => {
    setPicture(props.rocketName);
  }, []);

  return (
    <div className="Img">
      {image && <img className="rocket-image" src={image}></img>}
    </div>
  );
};

export default RocketImage;
