import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import NewsReducer from './reducer_news';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    news: NewsReducer,
    menu: MenuReducer,
    form: formReducer
});	

export default rootReducer;