import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = false;

const reducer = {
  [actionCreators.getPersonalInfoSuccess]: (state, action) => {
    const { user } = action.payload;

    if (!user.details.nickname) {
      user.details.nickname = "";
    }

    return user.details.nickname ? true : false;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
