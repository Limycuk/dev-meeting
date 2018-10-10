import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = {};

const reducer = {
  [actionCreators.getPersonalInfoSuccess]: (state, action) => {
    const { user } = action.payload;
    user.details.confirmEmail = user.details.email;
    if (!user.details.nickname) {
      user.details.nickname = "";
    }

    return user;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
