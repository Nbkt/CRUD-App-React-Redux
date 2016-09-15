import * as types from './actionTypes';
import productAPI from '../api/mockProductApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function createProductSuccess(product) {
  return { type: types.CREATE_PRODUCT_SUCCESS, product };
}

export function updateProductSuccess(product) {
  return { type: types.UPDATE_PRODUCT_SUCCESS, product };
}

export function deleteProductSuccess(product) {
  return { type: types.DELETE_PRODUCT_SUCCESS, product };
}

export function sortProductByTitle(products, sorted) {
  if (sorted) {
    return { type: types.SORT_PRODUCT_TITLE_DESC, products };
  } else {
    return { type: types.SORT_PRODUCT_TITLE_ASC, products };
  }
}

export function sortProductByManufacturer(products, sorted) {
  if (sorted) {
    return { type: types.SORT_PRODUCT_MANUFACTURER_DESC, products };
  } else {
    return { type: types.SORT_PRODUCT_MANUFACTURER_ASC, products };
  }
}

export function sortProductByCategory(products, sorted) {
  if (sorted) {
    return { type: types.SORT_PRODUCT_CATEGORY_DESC, products };
  } else {
    return { type: types.SORT_PRODUCT_CATEGORY_ASC, products };
  }
}

export function loadProducts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return productAPI.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveProduct(product) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return productAPI.saveProduct(product).then(product => {
     product.id ? dispatch(updateProductSuccess(product)) :
      dispatch(createProductSuccess(product));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteProduct(product) {
    return function(dispatch) {
      dispatch(beginAjaxCall());
      return productAPI.deleteProduct(product.id).then(
       dispatch(deleteProductSuccess(product))
      ).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
    };
}
