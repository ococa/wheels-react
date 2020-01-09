import React from 'react'
import {sc} from "./_utils";
import classnames from "../helper/classnames";

/**
 * Created by wangc on 2020/1/9
 */

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
