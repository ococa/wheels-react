import * as React from 'react';
import './importAllIcon';
import propTypes from 'prop-types';
import './index.scss';


interface IconProps {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

// <IconProps> Icon 接受一個參數 類型是IconProps
const Icons: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className='icon' onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

Icons.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
};

Icons.defaultProps = {
  name: 'alipay',
  onClick: () => {},
};

export default Icons;
