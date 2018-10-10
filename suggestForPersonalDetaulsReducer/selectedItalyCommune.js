import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = {};

const reducer = {
  [actionCreators.setItalianUserAddressSuccess]: (state, action) => {
    const { userCommune } = action.payload;

    return userCommune;
  },
  [actionCreators.setSelectedItalyProvince]: () => {
    return null;
  },
  [actionCreators.setItalianUserAddressFailure]: () => {
    return null;
  },
  [actionCreators.setSelectedItalyCommune]: (state, action) => {
    const { selectedItalyCommune } = action.payload;

    return selectedItalyCommune;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
