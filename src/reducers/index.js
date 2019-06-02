import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import NewsReducer from './reducer_news';

const rootReducer = combineReducers({
    news: NewsReducer,
    menu: MenuReducer
});	

export default rootReducer;