import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './button';
import Icons from './icon';

export {
  Button,
  Icons,
};

const fn: React.MouseEventHandler<Element> = (e) => {
  console.log('e', e.target);
};

ReactDOM.render(
  <div>
    <Icons name={"wechat"} onClick={fn} />
    <Icons name={"alipay"} />
  </div>,
  document.querySelector('#root')
);
