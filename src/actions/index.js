export const FETCH_NEWS = "fetch_news";
export const GET_NEWS = "get_news";
export const FETCH_MENU = "fetch_menu"
//import news from '../reducers/reducer_news.js';

export function fetchNews(){
    return {
        type: FETCH_NEWS,
        payload: {}
    };
}

export function getNews(news){
    return {
        type: GET_NEWS,
        payload: news
    };
}

export function fetchMenu(){
    return {
        type: FETCH_MENU,
        payload: {}
    };
}