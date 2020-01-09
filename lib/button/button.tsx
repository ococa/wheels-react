import React from 'react';
import P from 'prop-types';
import classnames from '../helper/classnames';
import { packagePrefix, sizes, colors } from '../variables';
import './button.scss';

const componentPrefix = 'button';
const prefix = `${packagePrefix}-${componentPrefix}`;

interface ButtonProps {
  children?: React.ReactNode,
  className? : string,
  type?: string,
  color?: string,
  size?: string,
  disabled?: boolean,
  icon?: string,
  loading?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    className,
    type,
    color,
    size,
    disabled,
    children,
    icon,
    loading, ...restProps
  } = props;
  return (
    <button {...restProps}  className={classnames(`${classnames(prefix)}-${size}`, `${classnames(prefix)}-${color}`, className)}>
      <span>{props.children}</span>
    </button>
  )
};

Button.propTypes = {
  type: P.oneOf(['text', 'outlined', 'contained']),
  color: P.oneOf(colors),
  size: P.oneOf(sizes),
  disabled: P.bool,
  children: P.node,
  icon: P.string,
  loading: P.bool,
};

Button.defaultProps = {
  size: 'medium',
  type: 'contained',
  color: 'default',
  disabled: false,
  loading: false,
};

export default Button;
