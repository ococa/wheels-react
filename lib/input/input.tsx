import React, {InputHTMLAttributes} from 'react';
import {scopedClassFactory} from "../helper/classes";
import classnames from "../helper/classnames";
import './input.scss';

// import
const componentPrefix = 'input';

const scopedClass = scopedClassFactory(componentPrefix);
const sc = scopedClass;

export interface Props extends InputHTMLAttributes<HTMLInputElement>{
}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <>
      <input
        className={classnames(sc(''), className)}
        {...rest}
      />
    </>
  )
};

export default Input;
