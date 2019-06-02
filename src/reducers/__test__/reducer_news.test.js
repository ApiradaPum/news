import _ from "lodash";
import reducer from '../reducer_news.js';
import news100 from '../../json/news100';
import newsSearchResult from './json/newsSearchResult.json';
import newsFirst15 from './json/newsFirst15.json';
import newsFirst30 from './json/newsFirst30.json';
import { FETCH_NEWS, SEARCH_NEWS } from '../../actions/index.js';

describe('news reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({ 
            all_news: news100,  display_news:[] 
        });
    });

    describe('handle FETCH_NEWS action', ()=> {
        it('should return first 15 news when no news in display_news', () => {
            expect(
                reducer(undefined, {
                    type: FETCH_NEWS
                })
            ).toEqual({ 
                all_news: news100, 
                display_news: newsFirst15
            });
        });

        it("should add 15 more news into state when news exist in display_news", () => {
            expect(
                reducer({
                    all_news: news100, 
                    display_news: newsFirst15
                }, {
                    type: FETCH_NEWS
                })
            ).toEqual({ 
                all_news: news100, 
                display_news: newsFirst30
            });
        });
    
    });
  

    describe('handle SEARCH_NEWS action', ()=> {
        it('should return empty state obj if there is no search matched', () => {
            expect(
                reducer(undefined, {
                    type: SEARCH_NEWS,
                    payload: "this search term will not be matched"
                })
            ).toEqual({ 
                all_news: [], 
                display_news: []
            });
        });

        it('should return obj with filtered all_news and its first 15 news if search matched', ()=>{
            expect(
                reducer(undefined, {
                    type: SEARCH_NEWS,
                    payload: "pe"
                })
            ).toEqual(newsSearchResult)
        });
    });
});


