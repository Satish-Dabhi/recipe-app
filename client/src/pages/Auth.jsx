import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react'
import GoogleSignInButton from '../components/GoogleSignInButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/user/userSlice';

const Auth = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleLoginSuccess = (response) => {
        localStorage.setItem('token', response.credential);
        const userData = {
            token: response.credential
        };
        dispatch(createUser(userData));

        navigate(`/home`);
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google login error:', error);
    };

    return (
        <Box sx={{ flexGrow: 1, overflowX: 'hidden' }}>
            <Grid container sx={{ justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
                <GoogleSignInButton
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                />
            </Grid>
        </Box>
    )
}

export default Auth