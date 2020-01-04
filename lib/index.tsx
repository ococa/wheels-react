import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './button';
import Icons from './icon';

export {
  Button,
  Icons,
};

ReactDOM.render(
  <div>
    <Icons name={"wechat"} />
    <Icons name={"alipay"} />
  </div>,
  document.querySelector('#root')
);
