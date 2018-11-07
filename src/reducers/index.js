import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: PostsReducer,
  form: fromReducer
});

export default rootReducer;
