import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [combineActions(
    actionCreators.updatePersonalInfoSuccess,
    actionCreators.updatePersonalInfoFailure
  )]: () => {
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
