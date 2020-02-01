import React from 'react';
import { shallow } from 'enzyme';
import ItemDetails from './item-details';

describe('<ItemDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<ItemDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
