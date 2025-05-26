import { combineReducers } from "redux";
import profileSlice from "./profile";

const reducer = combineReducers({
  profile: profileSlice.reducer,
});

export default reducer;
export const profileActions = profileSlice.actions;
