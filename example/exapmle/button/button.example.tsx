import React from 'react';
import {Button} from 'lib';


const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>

      <Button onClick={() => {alert('123')}} size={'small'}>123</Button>
      <Button size={'medium'}>123</Button>
      <Button size={'large'}>123</Button>

      <Button color={'secondary'} size={'small'}>123</Button>
      <Button color={'secondary'} size={'medium'}>123</Button>
      <Button color={'secondary'} size={'large'}>123</Button>

      <Button color={'primary'} size={'small'}>123</Button>
      <Button color={'primary'} size={'medium'}>123</Button>
      <Button color={'primary'} size={'large'}>123</Button>
    </div>
  )
};

export default ButtonExample;
