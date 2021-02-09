import React from 'react';
import './Login.css';
import { auth, provider } from "../../firebase";
import Button from '@material-ui/core/Button';
export const Login = () => {

const signIn = ()=>{
    auth.signInWithPopup(provider).catch(error => alert(error.message));
}

    return (
        <div className="login">
            
            <Button color="primary" onClick={signIn}>Logearse</Button>
        </div>
    )
}
