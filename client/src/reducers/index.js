import { combineReducers } from "redux";
import alert from "./alert.js";
import auth from "./auth.js";
import Profile from "./Profile.js";
export default combineReducers({
  alert,
  auth,
  Profile,
});
