import * as React from 'react';
import './importAllIcon';


interface IconProps {
  name?: string;
}

// <IconProps> Icon 接受一個參數 類型是IconProps
const Icons: React.FunctionComponent<IconProps> = (props) => {
  return (
    <div>
      icon: {props.name}
      <div>
        image:
        <svg>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
      </div>
    </div>
  );
};

export default Icons;
