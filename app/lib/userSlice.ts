// lib/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

interface UserState {
  users: User[];
  currentUserEmail: string | null;
}

const initialState: UserState = {
  users: [],
  currentUserEmail: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp(state, action: PayloadAction<{ email: string; password: string }>) {
      state.users.push({ ...action.payload, isLoggedIn: false });
    },
    logIn(state, action: PayloadAction<{ email: string; password: string }>) {
      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if (user) {
        user.isLoggedIn = true;
        state.currentUserEmail = action.payload.email;
      }
    },
    logOut(state) {
      const user = state.users.find(
        (u) => u.email === state.currentUserEmail
      );
      if (user) {
        user.isLoggedIn = false;
      }
      state.currentUserEmail = null;
    }
  },
});

export const { signUp, logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
