import React from 'react';
import CodeWrapper from "../../wrapper/codeWrapper";
import IconExample from "./icon.example";
import IconExample2 from "./icon2.example";

const x = require('!!raw-loader!./icon.example.tsx');

const IconDemo =  () => {
  return (
    <>
      <CodeWrapper code={x.default}>
        <IconExample />
      </CodeWrapper>
      <CodeWrapper code={x.default}>
        <IconExample2 />
      </CodeWrapper>
    </>

  )
};

export default IconDemo;
