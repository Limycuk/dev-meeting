import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [actionCreators.getPersonalInfoSuccess]: () => {
    return true;
  },
  [actionCreators.getPersonalInfoFailure]: () => {
    return true;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
