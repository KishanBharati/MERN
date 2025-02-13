import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h1 className='text-center text-3xl'>Login page</h1>
        <button className='btn'>login Button</button>
        <button className={classes.loginBtn}>Submit Button</button>
    </div>
  )
}

export default Login;

//rafce (for boiler plate)