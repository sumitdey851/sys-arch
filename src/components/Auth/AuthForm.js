import { useContext, useState } from 'react';

import classes from './AuthForm.module.css';
import AppAuth from '../../store/authContext';

const AuthForm = () => {
  const ctx = useContext(AppAuth);
  const [isLogin, setIsLogin] = useState(true);

  console.log(ctx);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const authHandler = async () => {

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          <button onClick={authHandler}>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
