import React from 'react';
import CodeWrapper from "../../wrapper/codeWrapper";
import InputExample from './input.example';

const x = require('!!raw-loader!./input.example.tsx');

const InputDemo =  () => {
  return (
    <CodeWrapper code={x.default}>
      <InputExample />
    </CodeWrapper>
  )
};

export default InputDemo;
