import _ from "lodash";
import { FETCH_NEWS, SEARCH_NEWS } from "../actions";
import news100 from '../json/news100';

const init_state = { all_news: news100,  display_news:[] };

export default function(state = init_state, action){
	switch(action.type){
		case FETCH_NEWS:
			return { 
				all_news: state.all_news, 
				display_news: _.concat(state.display_news, _.slice(state.all_news, state.display_news.length, state.display_news.length+15))
			};
		case SEARCH_NEWS:
			const searchedNews =  _.values(_.pickBy(news100, (value,key) => { return find_matched_term(value,key,action)}));
			return { all_news: searchedNews, display_news: _.slice(searchedNews, 0, 15)};
		default:
			return state;
	}
}

function find_matched_term(value,key,action){
	return _.includes(value.title, action.payload);
}