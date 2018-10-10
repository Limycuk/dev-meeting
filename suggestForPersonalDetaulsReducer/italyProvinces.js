import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = [];

const reducer = {
  [actionCreators.getItalianProvince]: (state, action) => {
    const { italyProvinces } = action.payload;

    return italyProvinces;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
