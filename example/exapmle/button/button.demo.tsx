import React from 'react';
import CodeWrapper from "../../wrapper/codeWrapper";
import ButtonExample from './button.example';

const x = require('!!raw-loader!./button.example.tsx');

const ButtonDemo =  () => {
  return (
    <CodeWrapper code={x.default}>
      <ButtonExample />
    </CodeWrapper>
  )
};

export default ButtonDemo;
