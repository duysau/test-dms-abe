import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppUser } from "models/AppUser";
import SliceName from "./slice.name";

const initialState: ProfileState = {
  isLoading: false,
  user: {} as AppUser,
};
type ProfileState = {
  isLoading: boolean;
  user: AppUser;
};

const profileSlice = createSlice({
  name: SliceName.Profile,
  initialState,
  reducers: {
    setFirstInitApp: (state, action: PayloadAction<AppUser>) => {
      state.user = action.payload;
    },
    cleanUser: (state) => {
      state.user = {} as AppUser;
    },
    updateAccount: (state, action: PayloadAction<AppUser>) => {
      state.user = action.payload;
    },
  },
});
export default profileSlice;
