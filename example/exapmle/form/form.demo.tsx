import React from 'react';
import CodeWrapper from "../../wrapper/codeWrapper";
import FormExample from './form.example';

const x = require('!!raw-loader!./form.example.tsx');

const FormDemo =  () => {
  return (
    <CodeWrapper code={x.default}>
      <FormExample />
    </CodeWrapper>
  )
};

export default FormDemo;
