import _ from "lodash";
import { GET_NEWS, FETCH_NEWS, SEARCH_NEWS } from "../actions";
import news from '../json/news';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_NEWS:
			return news.data;
		case GET_NEWS:
			return _.concat(state, action.payload);
		case SEARCH_NEWS:
			console.log("mint");
			return _.find(state, action.payload);
		default:
			return state;
	}
}