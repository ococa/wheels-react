import React from 'react';
import {Button} from 'lib/index';


const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button size={'small'}>123</Button>
      <Button size={'medium'}>123</Button>
      <Button size={'large'}>123</Button>

      <Button color={'secondary'} size={'small'}>123</Button>
      <Button color={'123123'} size={'small'}>123</Button>
      <Button color={'secondary'} size={'medium'}>123</Button>
      <Button color={'secondary'} size={'large'}>123</Button>

      <Button color={'primary'} size={'small'}>123</Button>
      <Button color={'primary'} size={'medium'}>123</Button>
      <Button color={'primary'} size={'large'}>123</Button>
    </div>
  )
};

export default ButtonExample;
