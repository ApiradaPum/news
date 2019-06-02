export const FETCH_NEWS = "fetch_news";
export const FETCH_MENU = "fetch_menu";
export const SEARCH_NEWS = "search_news";

export function fetchNews(){
    return {
        type: FETCH_NEWS
    };
}

export function searchNews(term){
    return {
        type: SEARCH_NEWS,
        payload: term
    };
}

export function fetchMenu(){
    return {
        type: FETCH_MENU
    };
}
