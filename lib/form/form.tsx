import React, {ReactFragment} from 'react'
import {FormErrors} from "./validator";
import {Input} from '../index'

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
  value: FormValue,
  fields: Array<Fields>,
  buttons: ReactFragment,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  onChange: (value: FormValue) => void;
  errors: FormErrors,
  onErrors?: (value: FormErrors) => void;
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
    >
      {fields.map(item => {
        return (
          <div key={item.name}>
            <label htmlFor={item.name}>{item.label} :</label>
            <Input
              name={item.name}
              type={item.input.type}
              value={value[item.name]}
              onChange={onInputChange}
            />
            {<p>{props.errors[item.name]}</p>}
          </div>
        )
      })}
      {props.buttons}
    </form>
  )
};

export default Form;
