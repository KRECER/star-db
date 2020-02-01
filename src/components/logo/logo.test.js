import React from 'react';
import { shallow } from 'enzyme';
import Logo from './logo';

describe('<Logo />', () => {
  test('renders', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
