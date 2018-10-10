import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [actionCreators.setIsPhoneOpened]: (state, action) => {
    const { isPhoneOpened } = action.payload;
    return isPhoneOpened;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
