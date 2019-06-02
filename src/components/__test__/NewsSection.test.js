import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {NewsSection} from '../NewsSection.js';
import newsJson from '../../json/news100.json';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        fetchNews: jest.fn(),
        news: newsJson,
		allNews: newsJson
    }

  const enzymeWrapper = shallow(<NewsSection {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('NewsSection', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setup();

      expect(enzymeWrapper.find('.container .row button').hasClass('btn-loadmore')).toBe(true);

    });
    it('should call fetchNews when render', () => {
        const { props } = setup();
        expect(props.fetchNews.mock.calls.length).toBe(1);
    });
    it('should call fetchNews when click loadmore', () => {
        const { enzymeWrapper, props } = setup();
        const bthLoadMore = enzymeWrapper.find('button.btn-loadmore');
        bthLoadMore.props().onClick();
        expect(props.fetchNews.mock.calls.length).toBe(2);
    });
  });
});