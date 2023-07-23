import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstructionsDetail, getRecipeDetail } from '../redux/recipe/recipeSlice';
import { useParams } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';


const RecipeDetails = () => {
  console.log("////////////////");
  let { id } = useParams();
  const { recipeDetails, recipeDetailsLoader, recipeInstructionsDetails } = useSelector((store) => store.recipeHandler);
  const [recipeDetailData, setRecipeDetailData] = useState([]);
  const [recipeInstructionData, setRecipeInstructionData] = useState([]);


  const dispatch = useDispatch();

  useEffect(() => {
    console.log("....", id);
    dispatch(getRecipeDetail(id));
    dispatch(getInstructionsDetail(id));
  }, [id]);

  useEffect(() => {
    recipeDetails && setRecipeDetailData(recipeDetails);
  }, [recipeDetails]);

  useEffect(() => {
    if (recipeInstructionsDetails.length > 0) {
      const instruction = recipeInstructionsDetails[0]?.steps && recipeInstructionsDetails[0]?.steps.length > 0 &&
        recipeInstructionsDetails[0]?.steps.map((item, index) => {
          return item.step;
        });
      setRecipeInstructionData(instruction);
    }
  }, [recipeInstructionsDetails]);

  if (recipeDetailsLoader) {
    return <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh" }}>
      <CircularProgress />
    </div>;
  }

  return (
    <Container maxWidth="lg" >
      <h1>{recipeDetails.title}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <hr></hr>
      <h2>Recipe Ingredients:</h2>
      <h4>
        {recipeDetails?.extendedIngredients && recipeDetails?.extendedIngredients.length > 0 &&
          recipeDetails?.extendedIngredients.map((item, index) =>
            `${item.name}, `)}
      </h4>
      <hr></hr>
      <h2>Recipe Instructions:</h2>
      {recipeInstructionData.length > 0 && recipeInstructionData.map((item, index) => {
        return <h4 key={index}>Step {index + 1}: {item}</h4>;
      })}
    </Container>
  );
};

export default RecipeDetails;
