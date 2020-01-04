import * as React from 'react';
import './importAllIcon';
import propTypes from 'prop-types';
import './index.scss';
import classnames from '../helper/classnames';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

// <IconProps> Icon 接受一個參數 類型是IconProps
const Icons: React.FunctionComponent<IconProps> = (props) => {
  const { className, name,  ...restProps } = props;
  return (
    <svg
      className={classnames('icon', className)}
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

Icons.propTypes = {
  name: propTypes.string.isRequired,
  className: propTypes.string,
};

Icons.defaultProps = {
  name: 'alipay',
};

export default Icons;
