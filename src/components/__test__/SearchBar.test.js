import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../SearchBar.js';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    onSubmit: jest.fn()
  }

  const enzymeWrapper = shallow(<SearchBar {...props} />);

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
    it('should call handleSubmitForm if form call onSubmit', () => {
        const { enzymeWrapper, props } = setup();
        const formSearch = enzymeWrapper.find('form');
        formSearch.props().onSubmit();
        expect(props.onSubmit.mock.calls.length).toBe(1);
    });
    it('should call hunndleSearchClick if click search icon', () => {
      const { enzymeWrapper, props } = setup();
      const iconSearch = enzymeWrapper.find('i.fa-search');
      iconSearch.props().onClick();
      expect(props.onSubmit.mock.calls.length).toBe(1);
    });
    it('should set data to state if input call handleTermChange', () => {
      const { enzymeWrapper } = setup();
      const inputSearch = enzymeWrapper.find('input.search-bar');
      inputSearch.simulate('change', {target: { value: "search" }});
      expect(enzymeWrapper.state('term')).toEqual( 'search' );
    });
  });
});