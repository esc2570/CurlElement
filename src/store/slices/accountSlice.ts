import { createSlice } from '@reduxjs/toolkit';

export const initialAccountState: AccountState = {
  created: false,
};

export type AccountState = {
  created: boolean;
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    setCreated: (state: AccountState) => {
      state.created = true;
    },
  },
});

const { actions, reducer } = accountSlice;
export const { setCreated } = actions;

export default reducer;
