import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = "";

const reducer = {
  [actionCreators.updatePersonalInfoSuccess]: (state, action) => {
    const { data } = action.payload;

    if (data.status === "OK") {
      return "success";
    } else {
      return "error";
    }
  },
  [actionCreators.updatePersonalInfoFailure]: (state, action) => {
    return "error";
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
