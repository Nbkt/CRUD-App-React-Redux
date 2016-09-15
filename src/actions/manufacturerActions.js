import * as types from './actionTypes';
import ManufacturerAPI from '../api/mockManufacturerApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadManufacturersSuccess(manufacturers) {

  return { type: types.LOAD_MANUFACTURER_SUCCESS, manufacturers };
}

export function loadManufacturers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ManufacturerAPI.getAllManufactures().then(manufacturers => {
      dispatch(loadManufacturersSuccess(manufacturers));
    }).catch(error => {
      throw(error);
    });
  };
}
