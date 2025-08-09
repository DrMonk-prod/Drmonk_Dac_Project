import { AuthUser } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface AuthUser {
//   id: number;
//   fullName: string;
//   email: string;
//   gender?: string | null;
//   phoneNumber?: string | null;
//   role: string;
//   profileImg?: string | null;
// }

interface AuthState {
  user: AuthUser | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthUser | null>) {
      state.user = action.payload;
      state.loading = false;
    },
    updateProfileImage: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user = {
          ...state.user,
          profileImg: action.payload,
        };
        localStorage.setItem("userData", JSON.stringify(state.user));
      }
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
    },
  },
});

export const { setUser, logout, updateProfileImage } = authSlice.actions;
export default authSlice.reducer;
