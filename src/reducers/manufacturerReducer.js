import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ManufacturerReducer(state = initialState.manufacturers, action) {
  switch(action.type) {
    case types.LOAD_MANUFACTURER_SUCCESS:
          return action.manufacturers;

    default:
          return state;
  }
}
