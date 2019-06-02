import reducer from '../reducer_menu.js';
import menu from '../../json/menu.json';
import { FETCH_MENU } from '../../actions/index.js';

describe('menu reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  })

  it('should handle FETCH_MENU', () => {
    expect(
      reducer([], {
        type: FETCH_MENU
      })
    ).toEqual(menu);
  });
});