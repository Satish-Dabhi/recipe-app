import { Alert, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Snackbar, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DetailsIcon from '@mui/icons-material/Details';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/user/userSlice';

const RecipeCard = ({ recipe }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);


  const handleSaveRecipe = (recipe) => {
    const token = localStorage.getItem('token');
    const userData = {
      token: token,
      recipes: [{
        id: recipe?.id,
        image: recipe?.image,
        title: recipe?.title,
      }]
    };
    dispatch(createUser(userData));
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity='success' onClose={handleClose} sx={{ width: '100%' }}>
          Recipe Saved
        </Alert>
      </Snackbar>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={recipe.image}
            alt={recipe.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.title.substring(0, 25)}...
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button variant="outlined" endIcon={<FavoriteIcon />} onClick={() => handleSaveRecipe(recipe)}>
              Save
            </Button>
            <Button variant="outlined" endIcon={<DetailsIcon />} onClick={() => navigate(`/recipe/${recipe?.id}`)}>
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default RecipeCard;
