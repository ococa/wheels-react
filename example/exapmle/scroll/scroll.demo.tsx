import React from 'react';
import CodeWrapper from "../../wrapper/codeWrapper";
import ScrollExample from './scroll.example';

const x = require('!!raw-loader!./scroll.example.tsx');

const ScrollDemo =  () => {
  return (
    <CodeWrapper code={x.default}>
      <ScrollExample />
    </CodeWrapper>
  )
};

export default ScrollDemo;
