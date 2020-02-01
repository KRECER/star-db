import React from 'react';
import { shallow } from 'enzyme';
import MainNav from './main-nav';

describe('<MainNav />', () => {
  test('renders', () => {
    const wrapper = shallow(<MainNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
