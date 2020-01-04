import * as React from 'react';

interface IconProps {
  name: string;
}

// <IconProps> Icon 接受一個參數 類型是IconProps
const Icon:React.FunctionComponent<IconProps> = (props) => {
  return (
    <div>icon: {props.name}</div>
  );
};

export default Icon;
