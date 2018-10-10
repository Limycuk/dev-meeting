import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [actionCreators.getPersonalInfoSuccess]: () => {
    return false;
  },
  [actionCreators.getPersonalInfoFailure]: (state, action) => {
    const { responseJSON } = action.payload;
    let isSessionExpired = false;
    if (responseJSON && responseJSON.code) {
      isSessionExpired = true;
    }

    return isSessionExpired;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
