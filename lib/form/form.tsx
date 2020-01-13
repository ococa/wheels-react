import React, {ReactFragment} from 'react'
import {FormErrors} from "./validator";
import {Input} from '../index'
import './form.scss';
import {scopedClassFactory} from "../helper/classes";
import classnames from "../helper/classnames";

// import
const componentPrefix = 'form';

const scopedClass = scopedClassFactory(componentPrefix);
const sc = scopedClass;

type Fields = {
  name: string,
  label: string,
  input: {
    type: string
  },
}

export interface FormValue {
  [K: string]: any
}

export interface Props {
  value: FormValue;
  fields: Array<Fields>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: FormErrors;
  onErrors?: (value: FormErrors) => void;
  errorDisplayMode?: 'first' | 'all'; // 错误展示, first展示第一个错误
}

const Form: React.FunctionComponent < Props > = (props) => {
  const {fields, value} = props;
  const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFormData = Object.assign({}, props.value, {[e.target.name]: e.target.value});
    props.onChange(newFormData);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={sc('')}
    >
      <table className={sc('table')}>
        <tbody>
          {fields.map(item => {
          return (
              <tr
                key={item.name}
                className={sc('row')}
              >
                <td className={classnames(sc('label-wrapper'), sc('td'))}>
                  <label htmlFor={item.name}>{item.label}:</label>
                </td>
                <td className={classnames(sc('td'), sc('input-wrapper'))}>
                  <Input
                    name={item.name}
                    type={item.input.type}
                    value={value[item.name]}
                    onChange={onInputChange}
                  />
                  {
                    props.errorDisplayMode === 'first' ?
                    <p className={sc('errors')}>{props.errors[item.name]?.shift()}</p> :
                    <p className={sc('errors')}>{props.errors[item.name]?.join(',')}</p>
                  }
                </td>

              </tr>
          )
        })}
        <tr className={sc('buttons')}>
          <td className={classnames(sc('label-wrapper'), sc('td'))}>{}</td>
          <td className={classnames(sc('td'), sc('input-wrapper'))}>{props.buttons}</td>
        </tr>
        </tbody>
      </table>

    </form>
  )
};

Form.defaultProps = {
  errorDisplayMode: 'first',
};

export default Form;
