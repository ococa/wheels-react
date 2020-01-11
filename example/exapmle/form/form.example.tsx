import React, {Fragment, useState} from 'react';
import Form from "../../../lib/form/form";
import {Button} from "../../../lib";
import validator from "../../../lib/form/validator";


const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '123',
    password: '321',
  });
  const [errors, setErrors] = useState({});
  const [fields] = useState([
    { name: 'username', label: 'username', input: { type: 'text' }},
    { name: 'password', label: 'password', input: { type: 'text' }},
  ]);
  const onSubmitForm = () => {
    const rules = [
      { key: 'username', minLength: 5 },
      { key: 'username', maxLength: 10 },
      { key: 'username', pattern: /^[a-zA-Z]$/ },
      { key: 'username', required: true },
      { key: 'password', required: true }
    ];
    const error = validator(formData, rules);
    setErrors(error);
    // console.error('error', error);
  };
  return (
    <>
      <Form
        onSubmit={onSubmitForm}
        value={formData}
        fields={fields}
        errors={errors}
        onErrors={(errors) => {
          return setErrors(errors);
        }}
        buttons={
          <Fragment>
            <Button type={'submit'} color={'primary'}>提交</Button>
            <Button >返回</Button>
          </Fragment>
        }
        onChange={(newFormData) => {
          // @ts-ignore
          return setFormData(newFormData);
        }}
      >
        123
      </Form>
    </>
  )
};

export default FormExample;
