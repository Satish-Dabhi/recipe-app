import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByToken } from '../../redux/user/userSlice';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';

const SavedRecipes = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const { userByToken, userByTokenLoader } = useSelector((store) => store.userHandler);
  const [saveRecipes, setSaveRecipes] = useState([]);

  useEffect(() => {
    dispatch(getUserByToken(token));
  }, [])

  useEffect(() => {
    console.log("userByToken", userByToken);
    if (userByToken.status == 'OK') {
      setSaveRecipes(userByToken?.data?.recipes);
    }
  }, [userByToken])

  return (
    <div>
      <h2>Saved Recipes</h2>
      <Grid container justifyContent="center"
        alignItems="center" spacing={2}>
        {saveRecipes && saveRecipes.length > 0 ? saveRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        )) :
          <h1>No Saved Recipes</h1>
        }
      </Grid>
    </div>
  );
}

export default SavedRecipes;
