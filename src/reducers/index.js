import groceries from '../ducks/groceries';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  groceries,
});

export default rootReducer;
