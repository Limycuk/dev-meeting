import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [actionCreators.setIsAuthTypeError]: (state, action) => {
    const { isAuthTypeError } = action.payload;
    return isAuthTypeError;
  },
  [actionCreators.updatePersonalInfoSuccess]: (state, action) => {
    const { data } = action.payload;

    if (data.status === "OK") {
      return false;
    } else {
      return state;
    }
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
