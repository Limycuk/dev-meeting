import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = "";

const reducer = {
  [actionCreators.updatePersonalInfoSuccess]: (state, action) => {
    const { data } = action.payload;

    if (data.status === "OK") {
      return i18n.value("message.successful.user_details");
    } else {
      let message = i18n.value(`server.error.${data.errorType}`);
      if (message === `server.error.${data.errorType}`) {
        message = data.description;
      }
      return message;
    }
  },
  [actionCreators.updatePersonalInfoFailure]: (state, action) => {
    const { data } = action.payload;
    let errCode = get(data, "responseJSON.code", false);
    if (!errCode) {
      errCode = "GENERAL";
    }
    return i18n.value(`server.error.${errCode}`);
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
