import classnames from '../classnames.ts';

describe('classnames', () => {
  it('when received one className', () => {
    const result = classnames('a');
    expect(result).toEqual('a');
  });
  it('when received two className', () => {
    const result = classnames('a', 'b');
    expect(result).toEqual('a b');
  });
  it('when received 3 className', () => {
    const result = classnames('a', 'b', '');
    expect(result).toEqual('a b');
  });
  it('when received on className', () => {
    const result = classnames('a', 'b', null);
    expect(result).toEqual('a b');
  });
});
