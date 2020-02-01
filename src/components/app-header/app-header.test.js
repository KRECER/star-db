import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './app-header';

describe('<AppHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
