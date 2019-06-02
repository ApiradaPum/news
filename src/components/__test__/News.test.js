import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import News from '../News.js';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    data:{
        img: "img",
        title: "title",
        content: "content",
        updated_at: "updated_at"
    }
  }

  const enzymeWrapper = shallow(<News {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('News', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setup();

      expect(enzymeWrapper.find('.col-news > div').first().hasClass('block-news')).toBe(true);

      expect(enzymeWrapper.find('h3').text()).toBe(props.data.title);  

      expect(enzymeWrapper.find('img').hasClass('img-responsive')).toBe(true);

      expect(enzymeWrapper.find('.block-news .newsMobile h5').hasClass('title')).toBe(true); 

      expect(enzymeWrapper.find('.block-news .newsMobile span').hasClass('update-date')).toBe(true); 

    });
  });
});