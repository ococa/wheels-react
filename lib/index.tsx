import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './button';
import Icon from './icon';

console.log(React);
console.log(ReactDOM);
export {
  Button,
  Icon,
};

ReactDOM.render(
  <div>
    <Icon name={"123"} />
  </div>,
  document.body
);
