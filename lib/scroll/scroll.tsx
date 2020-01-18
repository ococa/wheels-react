import React, {HTMLAttributes} from 'react'
import {scopedClassFactory} from "../helper/classes";
import './scroll.scss';

const componentPrefix = 'scroll';

const scopedClass = scopedClassFactory(componentPrefix);
const sc = scopedClass;


export interface Props extends HTMLAttributes<HTMLDivElement>{

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={sc('')} {...rest}>
      <div className={sc('inner')}>
        {children}
      </div>
    </div>
  )
};

export default Scroll;
