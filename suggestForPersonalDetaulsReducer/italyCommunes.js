import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = [];

const reducer = {
  [combineActions([
    actionCreators.setItalianUserAddressSuccess,
    actionCreators.getItalianCommunesSuccess
  ])]: (state, action) => {
    const { italyCommunes } = action.payload;

    return italyCommunes;
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
