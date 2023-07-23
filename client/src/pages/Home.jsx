import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchComponent from '../components/SearchComponent';
import RecipeCard from '../components/recipe/RecipeCard';
import { getRecipes } from '../redux/recipe/recipeSlice';
import { useScrollTrigger } from '@mui/material';

const Home = () => {

    const { recipes, recipesLoader } = useSelector((store) => store.recipeHandler);
    const [recipeData, setRecipeData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getRecipes('mix'));
    }, []);

    useEffect(() => {
        dispatch(getRecipes(searchQuery));
    }, [searchQuery]);

    useEffect(() => {
        setRecipeData(recipes);
    }, [recipes]);

    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 100,
    });

    useEffect(() => {
        if (trigger && !recipesLoader) {
            console.log("recipes,");
        }
    }, [trigger, recipesLoader]);


    return (
        <>
            <Container maxWidth="lg" >
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: '100vh' }}
                >
                    <Grid item xs={4} style={{ margin: '10px' }}>
                        <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </Grid>

                    {recipesLoader ? <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh" }}>
                        <CircularProgress />
                    </div> :
                        <Grid container justifyContent="center"
                            alignItems="center" spacing={2}>
                            {recipeData && recipeData.length > 0 ? recipeData.map((recipe, index) => (
                                <RecipeCard key={index} recipe={recipe} />
                            )) :
                                <h1>No Data Found</h1>
                            }
                        </Grid>}
                </Grid>
            </Container>
        </>
    )
}

export default Home;