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
    <Icons
      name={"wechat"}
      onClick={fn}
      onMouseEnter={()=> { console.log('enter'); }}
      onMouseLeave={() => { console.log('leave'); }}
    />
    <Icons
      name={"alipay"}
      className={"!23"}
    />
  </div>,
  document.querySelector('#root')
);
