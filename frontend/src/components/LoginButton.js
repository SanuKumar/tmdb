import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, loginWithPopup } = useAuth0();
  return (
    <>
      <div>
        <button onClick={loginWithRedirect}>Log In</button>
      </div>
      <div>
        <button onClick={loginWithPopup}>Log In with Popup</button>
      </div>
    </>
  );
};

export default LoginButton;
