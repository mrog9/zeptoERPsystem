import { CreateUser } from "../components/CreateUser.jsx";
import { LoginForm } from "../components/LoginForm.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

export function LoginPage(){

  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [usernameState, setUsernameState] = useState("");

  useEffect(() => {

    if (loginSuccess){

      navigate("/searchProducts", {
        state: {username: usernameState}
      })

    }

  }, [loginSuccess, usernameState]);
  
  return (
    <div>

        <LoginForm 
          setLoginSuccess={setLoginSuccess}
          setUsernameState={setUsernameState}
          usernameState={usernameState}  
        />

        <CreateUser/>

    </div>
  );
}

