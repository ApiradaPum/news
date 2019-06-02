import * as actions from '../index.js';
import {FETCH_NEWS, FETCH_MENU, SEARCH_NEWS} from '../index.js';

describe('actions', () => {
    describe('fetchNews', ()=>{
        it('should create an action to fetch news', () => {
            const expectedAction = {
              type: FETCH_NEWS
            }
            expect(actions.fetchNews()).toEqual(expectedAction)
        });
    }),
    describe('searchNews', ()=>{
        it('should create an action to search news', () => {
            const term = "to search";
            const expectedAction = {
                type: SEARCH_NEWS,
                payload: term
            }
            expect(actions.searchNews(term)).toEqual(expectedAction);
        });
    }),
    describe('fetchMenu', ()=>{
        it('should create an action to fetch news', () => {
            const expectedAction = {
              type: FETCH_MENU
            }
            expect(actions.fetchMenu()).toEqual(expectedAction);
        });
    });
});