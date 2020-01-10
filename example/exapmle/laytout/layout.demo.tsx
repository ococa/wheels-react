import React from 'react';
import CodeWrapper from "../../wrapper/codeWrapper";
import LayoutExample from "./layout.example";

const x = require('!!raw-loader!./layout.example.tsx');

const IconDemo =  () => {
  return (
    <CodeWrapper code={x.default}>
      <LayoutExample />
    </CodeWrapper>
  )
};

export default IconDemo;
