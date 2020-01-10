import React from 'react';
import CodeWrapper from "../../wrapper/codeWrapper";
import DialogExample from './dialog.example';

const x = require('!!raw-loader!./dialog.example.tsx');

const DialogDemo =  () => {
  return (
    <CodeWrapper code={x.default}>
      <DialogExample />
    </CodeWrapper>
  )
};

export default DialogDemo;
