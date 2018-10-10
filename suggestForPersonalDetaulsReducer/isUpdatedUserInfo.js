import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [actionCreators.getPersonalInfoSuccess]: (state, action) => {
    return defaultState;
  },
  [actionCreators.updatePersonalInfoSuccess]: (state, action) => {
    const { data } = action.payload;

    if (data.status === "OK") {
      return true;
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
