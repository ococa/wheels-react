import React from 'react'
import {sc} from "./_utils";
import classnames from "../helper/classnames";


export interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classnames(sc('header'), className)} {...restProps}>
      { props.children }
    </div>
  )
};

export default Header;
