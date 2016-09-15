import {combineReducers} from 'redux';
import products from './productReducer';
import manufacturers from './manufacturerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  products,
  manufacturers,
  ajaxCallsInProgress
});

export default rootReducer;
