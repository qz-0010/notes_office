import axios from 'axios';
import qs from 'qs';
import {
  OPEN_POPUP, CLOSE_POPUP
} from './types';

export const openPopup = (Component, componentProps) => (dispatch) => {
  dispatch({
    type: OPEN_POPUP,
    active: true,
    Component,
    componentProps
  });
};

export const closePopup = () => (dispatch) => {
  dispatch({
    type: CLOSE_POPUP,
    active: false,
    Component: null
  });
};
