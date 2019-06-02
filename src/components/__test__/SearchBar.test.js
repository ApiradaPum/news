import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../SearchBar.js';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
  }

  const enzymeWrapper = shallow(<SearchBar />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('SearchBar', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setup();
      expect(enzymeWrapper.find('form i').hasClass('fa-search')).toBe(true);

      expect(enzymeWrapper.find('form input').hasClass('search-bar')).toBe(true);
    });
  });
});