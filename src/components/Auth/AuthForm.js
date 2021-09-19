import { useRef, useState } from "react";

import classes from "./AuthForm.module.css";
import getCookie from "../../utils/getCookie";

import loginHandler from "./loginHandler";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userAuthToken, setUserAuthToken] = useState("");
  const [userData, setUserData] = useState({});

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const authHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      try {
        const appAuthToken = getCookie("appAuthToken");
        const resData = await loginHandler(appAuthToken, enteredEmail, enteredPassword);
        if (resData.status !== "success") {
          throw new Error("Unauthorized");
        }
        
        const data = resData.data.data;
        setUserAuthToken(data.token);
        setUserData(data.user);
      } catch (error) {
        alert("Invalid Credentials");
      }
    }
  };

  console.log(userAuthToken);
  console.log(userData);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={authHandler}>
            {isLogin ? "Login" : "Create Account"}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
