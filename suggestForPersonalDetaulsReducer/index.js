import { combineReducers } from "redux";

import originalUser from "./originalUser";
import currentUser from "./currentUser";
import personalInfoLoaded from "./personalInfoLoaded";
import nicknameLoaded from "./nicknameLoaded";
import isNicknameExist from "./isNicknameExist";
import isNicknameEnabled from "./isNicknameEnabled";
import loaded from "./loaded";
import italyCommunes from "./italyCommunes";
import italyProvinces from "./italyProvinces";
import selectedItalyProvince from "./selectedItalyProvince";
import selectedItalyCommune from "./selectedItalyCommune";
import isSessionExpired from "./isSessionExpired";
import isLoadingFailure from "./isLoadingFailure";
import isAuthTypeError from "./isAuthTypeError";
import msgVisible from "./msgVisible";
import msg from "./msg";
import msgClass from "./msgClass";
import isPhoneOpened from "./isPhoneOpened";
import isUpdatedUserInfo from "./isUpdatedUserInfo";

combineReducers({
  originalUser,
  currentUser,
  personalInfoLoaded,
  nicknameLoaded,
  isNicknameExist,
  isNicknameEnabled,
  loaded,
  italyCommunes,
  italyProvinces,
  selectedItalyProvince,
  selectedItalyCommune,
  isSessionExpired,
  isLoadingFailure,
  isAuthTypeError,
  msgVisible,
  msg,
  msgClass,
  isPhoneOpened,
  isUpdatedUserInfo
});
