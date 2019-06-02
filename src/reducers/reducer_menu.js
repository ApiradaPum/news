import { FETCH_MENU } from "../actions";
import menu from '../json/menu';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_MENU:
			return menu;
		default:
			return state;
	}
}