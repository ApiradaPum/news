import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MenuList} from '../MenuList.js';
import menuJson from '../../json/menu.json';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    fetchMenu: jest.fn(),
    menu: menuJson
  }

  const enzymeWrapper = shallow(<MenuList {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('MenuList', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('.group-nav ul').hasClass('navbar-nav')).toBe(true);

      expect(enzymeWrapper.find('.group-nav ul li').at(0).hasClass('nav-item')).toBe(true);

      expect(enzymeWrapper.find('.group-nav ul li a').at(0).hasClass('nav-link')).toBe(true);

    });

    it('should call fetchMenu when render', () => {
        const { props } = setup();
        expect(props.fetchMenu.mock.calls.length).toBe(1);
    });
  })
})