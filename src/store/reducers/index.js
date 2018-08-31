import { combineReducers } from 'redux';
import {
  OPEN_POPUP, CLOSE_POPUP
} from '../actions/types';

const popupReducer = (state = { active: false, Component: null }, action) => {
  const { active, Component, componentProps } = action;

  switch (action.type) {
    case OPEN_POPUP:
      return {
        ...state,
        active,
        Component,
        componentProps
      };
    case CLOSE_POPUP:
      return {
        ...state,
        active
      };
    default:
      return state;
  }
};

export default combineReducers({
  popup: popupReducer
});
