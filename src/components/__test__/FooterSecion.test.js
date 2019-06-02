import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FooterSection from '../FooterSection.js';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
  }

  const enzymeWrapper = shallow(<FooterSection />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('FooterSection', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.footer').childAt(1).hasClass('copyright')).toBe(true);

      expect(enzymeWrapper.find('i').hasClass('fa-copyright')).toBe(true);

    });
  });
});