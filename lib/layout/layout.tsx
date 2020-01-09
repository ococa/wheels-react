import React, {ReactElement} from 'react'
import { sc } from "./_utils";
import './layout.scss';
import classnames from "../helper/classnames";
import Aside from "./aside";

/**
 * Created by wangc on 2020/1/9
 */

export interface Props extends React.HTMLAttributes<HTMLElement>{
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  console.log(props.children);
  // 1. 第一种方式，添加标记
  // let hasAside = undefined;
  // (props.children as Array<ReactElement>).map(node => {
  //   // console.log(node)
  //   if (node.type === Aside) {
  //     console.log('node', node);
  //     hasAside = true;
  //   }
  // });

  // 2. 第二种方式，reduce
  // const hasAside = (props.children as Array<ReactElement>).reduce((result, node) => {
  //   return result || node.type === Aside;
  // }, false);

  // 3. 第三种方式，some
  const hasAside = (props.children as Array<ReactElement>).some(node => node.type === Aside);
  return (
    <div className={classnames(sc(), (hasAside && sc('has-aside')), className)} {...restProps}>
      { props.children }
    </div>
  )
};

export default Layout;
