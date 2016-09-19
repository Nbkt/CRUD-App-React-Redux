import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export default function productReducer(state = initialState.products, action) {
  switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
    return action.products;

    case types.CREATE_PRODUCT_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.product)
    ];

    case types.UPDATE_PRODUCT_SUCCESS:
    return [
      ...state.filter(product => product.id !== action.product.id),
      Object.assign({}, action.product)
    ];

    case types.DELETE_PRODUCT_SUCCESS: {
      const newState = Object.assign([], state);
      return [...newState.filter(product => product.id !== action.product.id)];

    }

    case types.SORT_PRODUCTS_TITLE_ASC: {
      const newState = Object.assign([], state);
      return _.orderBy(newState, ['title'], ['asc']);
    }

    case types.SORT_PRODUCTS_TITLE_DESC: {
      const newState = Object.assign([], state);
      return _.orderBy(newState, ['title'], ['desc']);
    }

    case types.SORT_PRODUCTS_MANUFACTURER_ASC: {
      const newState = Object.assign([], state);
      return _.orderBy(newState, ['manufacturerId'], ['asc']);
    }

    case types.SORT_PRODUCTS_MANUFACTURER_DESC: {
      const newState = Object.assign([], state);
      return _.orderBy(newState, ['manufacturerId'], ['desc']);
    }

    case types.SORT_PRODUCTS_CATEGORY_ASC: {
      const newState = Object.assign([], state);
      return _.orderBy(newState, ['category'], ['asc']);
    }

    case types.SORT_PRODUCTS_CATEGORY_DESC: {
      const newState = Object.assign([], state);
      return _.orderBy(newState, ['category'], ['desc']);
    }

    case types.SEARCH_PRODUCTS_SUCCESS: {
      return action.products;
    }




    default:
    return state;
  }
}
