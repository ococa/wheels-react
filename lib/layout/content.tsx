import React from 'react'
import {sc} from "./_utils";
import classnames from "../helper/classnames";

/**
 * Created by wangc on 2020/1/9
 */

export interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Content: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classnames(sc('content'), className)} {...restProps}>
      { props.children }
    </div>
  )
};

export default Content;
