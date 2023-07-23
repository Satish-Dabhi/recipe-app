import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipe/recipeSlice";
import userSlice from "./user/userSlice";


const store = configureStore({
  reducer: {
    recipeHandler: recipeSlice,
    userHandler: userSlice,
  },
});

export default store;
