import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Home Page</h1>
        <p>This is the Home redirected from Login Page.</p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            console.log(jwtDecode(credentialResponse.credential));
          }}
          onError={() => alert("Login failed, Try again.")}
        />
      </div>
    </>
  );
};

export default Home;
