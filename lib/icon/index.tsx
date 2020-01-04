import * as React from 'react';
import './importAllIcon';
import propTypes from 'prop-types';
import './index.scss';


interface IconProps {
  name: string;
}

// <IconProps> Icon 接受一個參數 類型是IconProps
const Icons: React.FunctionComponent<IconProps> = (props) => {
  return (
    <div>
      <svg className='icon'>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </div>
  );
};

Icons.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
};

Icons.defaultProps = {
  name: 'alipay',
  onClick: () => { console.log('default') },
};

export default Icons;
