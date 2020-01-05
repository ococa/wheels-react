import * as renderer from 'react-test-renderer';
import React from 'react';
import { mount } from 'enzyme';
import Icon from '../index';

describe('button', () => {
  it('是个 div', () => {
    const json = renderer.create(<Icon />).toJSON();
    expect(json).toMatchSnapshot()
  });

  it('onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="alipay" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled()
  })
});
