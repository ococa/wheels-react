import React from 'react'
import {sc} from "./_utils";
import classnames from "../helper/classnames";


export interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Aside: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classnames(sc('aside'), className)} {...restProps}>
      { props.children }
    </div>
  )
};

export default Aside;
