import React from 'react';
import { shallow } from 'enzyme';
import ItemInfo from './item-info';

describe('<ItemInfo />', () => {
  test('renders', () => {
    const wrapper = shallow(<ItemInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
