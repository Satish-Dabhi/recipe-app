import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  GET_API,
  GET_RECIPES_END_POINT,
  GET_RECIPE_DETAIL_BY_ID_END_POINT,
  GET_RECIPE_INSTRUCTIONS_BY_ID_END_POINT
} from '../services/api';

const initialState = {
  recipes: {},
  recipesLoader: false,
  recipeDetails: {},
  recipeDetailsLoader: false,
  recipeInstructionsDetails: {},
  recipeInstructionsLoader: false,
};

export const getRecipes = createAsyncThunk('services/getRecipes', async (query, thunkAPI) => {
  try {
    const api = GET_RECIPES_END_POINT.replace('${query}', query);
    const resp = await GET_API(api);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const getRecipeDetail = createAsyncThunk('services/getRecipeDetail', async (id, thunkAPI) => {
  try {
    const api = GET_RECIPE_DETAIL_BY_ID_END_POINT.replace('${id}', id);
    const resp = await GET_API(api);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const getInstructionsDetail = createAsyncThunk('services/getInstructionsDetail', async (id, thunkAPI) => {
  try {
    const api = GET_RECIPE_INSTRUCTIONS_BY_ID_END_POINT.replace('${id}', id);
    const resp = await GET_API(api);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.recipesLoader = true;
    },
    [getRecipes.fulfilled]: (state, { payload }) => {
      state.recipesLoader = false;
      state.recipes = payload;
    },
    [getRecipes.rejected]: (state) => {
      state.recipesLoader = false;
    },
    [getRecipeDetail.pending]: (state) => {
      state.recipeDetailsLoader = true;
    },
    [getRecipeDetail.fulfilled]: (state, { payload }) => {
      state.recipeDetailsLoader = false;
      state.recipeDetails = payload;
    },
    [getRecipeDetail.rejected]: (state) => {
      state.recipeDetailsLoader = false;
    },
    [getInstructionsDetail.pending]: (state) => {
      state.recipeInstructionsLoader = true;
    },
    [getInstructionsDetail.fulfilled]: (state, { payload }) => {
      state.recipeInstructionsLoader = false;
      state.recipeInstructionsDetails = payload;
    },
    [getInstructionsDetail.rejected]: (state) => {
      state.recipeInstructionsLoader = false;
    }
  },
});

export default recipeSlice.reducer;
