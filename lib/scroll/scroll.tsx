import React, {HTMLAttributes} from 'react'
import {scopedClassFactory} from "../helper/classes";
import './scroll.scss';
import scrollBarWidth from "./scrollBarWidth";

const componentPrefix = 'scroll';

const scopedClass = scopedClassFactory(componentPrefix);
const sc = scopedClass;


export interface Props extends HTMLAttributes<HTMLDivElement>{

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={sc('')} {...rest}>
      <div className={sc('inner')} style={{ right: -scrollBarWidth() }}>
        {children}
      </div>
    </div>
  )
};

export default Scroll;
