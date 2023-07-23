import { GoogleLogin } from '@react-oauth/google';
import React from 'react';

const GoogleSignInButton = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
        />
    );
};

export default GoogleSignInButton;
