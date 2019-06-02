import _ from "lodash";
import { GET_NEWS, FETCH_NEWS, SEARCH_NEWS } from "../actions";
import news100 from '../json/news100';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_NEWS:
			return _.slice(news100, 0, 15);
		case GET_NEWS:
			return _.concat(state, _.slice(news100, action.payload.length, action.payload.length+15));
		case SEARCH_NEWS:
			return _.find(state, action.payload);
		default:
			return state;
	}
}