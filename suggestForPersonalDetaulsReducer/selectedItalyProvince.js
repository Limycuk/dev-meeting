import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = {};

const reducer = {
  [actionCreators.setItalianUserAddressSuccess]: (state, action) => {
    const { userProvince } = action.payload;

    return userProvince;
  },
  [actionCreators.setSelectedItalyProvince]: (state, action) => {
    const { selectedItalyProvince } = action.payload;

    return selectedItalyProvince;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
