import React from 'react';
import { shallow } from 'enzyme';
import Preloader from './preloader';

describe('<Preloader />', () => {
  test('renders', () => {
    const wrapper = shallow(<Preloader />);
    expect(wrapper).toMatchSnapshot();
  });
});
