import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import SavedRecipes from './components/recipe/SavedRecipes';
import Auth from './pages/Auth';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
