import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [actionCreators.setIsNicknameEnabled]: (state, action) => {
    const { isNicknameEnabled } = action.payload;

    return isNicknameEnabled;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
