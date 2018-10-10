import { handleActions, combineActions } from "redux-actions";

import * as actionCreators from "../actions";

const defaultState = {
  originalUser: {},
  currentUser: {},
  personalInfoLoaded: false,
  nicknameLoaded: false,
  isNicknameExist: false,
  isNicknameEnabled: false,
  loaded: false,
  italyCommunes: [],
  italyProvinces: [],
  selectedItalyProvince: {},
  selectedItalyCommune: {},
  isSessionExpired: false,
  isLoadingFailure: false,
  isAuthTypeError: false,
  msgVisible: false,
  msg: "",
  msgClass: "",
  isPhoneOpened: false,
  isUpdatedUserInfo: false
};

const reducer = {
  [actionCreators.getPersonalInfoSuccess]: (state, action) => {
    const { user } = action.payload;
    user.details.confirmEmail = user.details.email;
    if (!user.details.nickname) {
      user.details.nickname = "";
    }

    return {
      ...state,
      originalUser: user,
      currentUser: cloneDeep(user),
      isNicknameExist: user.details.nickname ? true : false,
      personalInfoLoaded: true,
      isSessionExpired: false,
      isLoadingFailure: false,
      isUpdatedUserInfo: false
    };
  },
  [actionCreators.getPersonalInfoFailure]: (state, action) => {
    const { responseJSON } = action.payload;
    let isSessionExpired = false;
    if (responseJSON && responseJSON.code) {
      isSessionExpired = true;
    }

    return {
      ...state,
      isSessionExpired,
      isLoadingFailure: true,
      personalInfoLoaded: true
    };
  },
  [actionCreators.getItalianProvince]: (state, action) => {
    const { italyProvinces } = action.payload;

    return {
      ...state,
      italyProvinces
    };
  },
  [actionCreators.setItalianUserAddressSuccess]: (state, action) => {
    const { italyCommunes, userProvince, userCommune } = action.payload;

    return {
      ...state,
      selectedItalyCommune: userCommune,
      selectedItalyProvince: userProvince,
      italyCommunes
    };
  },
  [actionCreators.setIsNicknameEnabled]: (state, action) => {
    const { isNicknameEnabled } = action.payload;

    return {
      ...state,
      isNicknameEnabled,
      nicknameLoaded: true
    };
  },
  [actionCreators.setSelectedItalyProvince]: (state, action) => {
    const { selectedItalyProvince } = action.payload;

    return {
      ...state,
      selectedItalyProvince,
      selectedItalyCommune: null
    };
  },
  [actionCreators.getItalianCommunesSuccess]: (state, action) => {
    const { italyCommunes } = action.payload;

    return {
      ...state,
      italyCommunes
    };
  },
  [actionCreators.setSelectedItalyCommune]: (state, action) => {
    const { selectedItalyCommune } = action.payload;

    return {
      ...state,
      selectedItalyCommune
    };
  },
  [actionCreators.setItalianUserAddressFailure]: (state, action) => {
    return {
      ...state,
      selectedItalyProvince: null,
      selectedItalyCommune: null
    };
  },
  [actionCreators.updateCurrentUser]: (state, action) => {
    const { currentUser } = action.payload;
    return {
      ...state,
      currentUser
    };
  },
  [actionCreators.setIsPhoneOpened]: (state, action) => {
    const { isPhoneOpened } = action.payload;
    return {
      ...state,
      isPhoneOpened
    };
  },
  [actionCreators.setIsAuthTypeError]: (state, action) => {
    const { isAuthTypeError } = action.payload;
    return {
      ...state,
      isAuthTypeError
    };
  },
  [actionCreators.updatePersonalInfoSuccess]: (state, action) => {
    const { data } = action.payload;

    if (data.status === "OK") {
      return {
        ...state,
        isAuthTypeError: false,
        msgVisible: true,
        msg: i18n.value("message.successful.user_details"),
        msgClass: "success",
        phoneOpened: false,
        isNicknameExist: !!state.currentUser.details.nickname,
        isUpdatedUserInfo: true
      };
    } else {
      let message = i18n.value(`server.error.${data.errorType}`);
      if (message === `server.error.${data.errorType}`) {
        message = data.description;
      }
      return {
        ...state,
        msgVisible: true,
        msg: message,
        msgClass: "error",
        phoneOpened: false
      };
    }
  },
  [actionCreators.updatePersonalInfoFailure]: (state, action) => {
    const { data } = action.payload;
    let errCode = get(data, "responseJSON.code", false);
    if (!errCode) {
      errCode = "GENERAL";
    }
    return {
      ...state,
      msgVisible: true,
      msg: i18n.value(`server.error.${errCode}`),
      msgClass: "error",
      phoneOpened: false
    };
  },
  [combineActions([
    actionCreators.logoutUserComplete,
    clearPersonalDetails
  ])]: () => {
    return defaultState;
  }
};

export default handleActions(reducer, defaultState);
