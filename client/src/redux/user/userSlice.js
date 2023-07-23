import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ADD_USER_END_POINT, GET_API, GET_USER_BY_ID_END_POINT, POST_API
} from '../services/api';

const initialState = {
  addUser: {},
  addUserLoader: false,
  userByToken: {},
  userByTokenLoader: false
};

export const createUser = createAsyncThunk('services/createUser', async (userData, thunkAPI) => {
  try {
    const resp = await POST_API(ADD_USER_END_POINT, userData);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const getUserByToken = createAsyncThunk('services/getUserByToken', async (token, thunkAPI) => {
  try {
    const api = GET_USER_BY_ID_END_POINT.replace('${token}', token);
    const resp = await GET_API(api);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending]: (state) => {
      state.addUserLoader = true;
    },
    [createUser.fulfilled]: (state, { payload }) => {
      state.addUserLoader = false;
      state.addUser = payload;
    },
    [createUser.rejected]: (state) => {
      state.addUserLoader = false;
    },
    [getUserByToken.pending]: (state) => {
      state.userByTokenLoader = true;
    },
    [getUserByToken.fulfilled]: (state, { payload }) => {
      state.userByTokenLoader = false;
      state.userByToken = payload;
    },
    [getUserByToken.rejected]: (state) => {
      state.userByTokenLoader = false;
    }
  },
});

export default userSlice.reducer;
