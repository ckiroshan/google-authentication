import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>Home Page</h1>
        <p>This is the Homepage. Click below to login.</p>
        <div className="box">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              console.log(jwtDecode(credentialResponse.credential));
              navigate("/dashboard");
            }}
            onError={() => alert("Login failed, Try again.")}
            auto_select={true}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
