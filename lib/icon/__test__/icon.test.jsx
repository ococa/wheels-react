import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../index';

describe('button', () => {
  it('是个 div', () => {
    const json = renderer.create(<Icon />).toJSON()
    expect(json).toMatchSnapshot()
  })
});
