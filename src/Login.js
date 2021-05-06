import React from "react";
import { loginUrl } from "./spotify";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/*
    1.Click login button
    2. Redirect to spotify login page
    3. Redirect to home page once authorized
    */}
    </div>
  );
}

export default Login;
