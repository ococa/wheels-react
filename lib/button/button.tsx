import React from 'react';
import P from 'prop-types';

interface Props {
  children?: React.ReactNode,
  type?: string,
  color?: string,
  size?: string,
  disabled?: boolean,
  icon?: string,
  loading?: boolean,
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {
    type,
    color,
    size,
    disabled,
    children,
    icon,
    loading, ...restProps
  } = props;
  console.log(restProps);
  return (
    <button className={props.type}>{props.children}</button>
  )
};

Button.propTypes = {
  type: P.oneOf(['text', 'outlined', 'contained']),
  color: P.oneOf(['primary', 'secondary']),
  size: P.oneOf(['normal', 'large', 'small']),
  disabled: P.bool,
  children: P.node,
  icon: P.string,
  loading: P.bool,
};

Button.defaultProps = {
  size: 'normal',
  type: '',
  disabled: false,
  loading: false,
};

export default Button;
