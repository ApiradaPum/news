import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HeaderSection} from '../HeaderSection.js';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    searchNews: jest.fn()
  }

  const enzymeWrapper = shallow(<HeaderSection {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('HeaderSection', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.nav-header .nav-bar .header-bar img').hasClass('logo')).toBe(true);

      expect(enzymeWrapper.find('h4.title-mobile').text()).toBe('News');

      expect(enzymeWrapper.find('i').hasClass('fa-bars')).toBe(true);

      expect(enzymeWrapper.find('.nav-header .nav-bar').childAt(1).hasClass('menuList')).toBe(true);
    });

    it('should call searchNews if searchBar call onSubmit', () => {
        const { enzymeWrapper, props } = setup();
        const searchBar = enzymeWrapper.find('SearchBar');
        searchBar.props().onSubmit();
        expect(props.searchNews.mock.calls.length).toBe(1);
    });
  });
});