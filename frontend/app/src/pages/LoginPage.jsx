import { CreateUser } from "../components/CreateUser.jsx";
import { LoginForm } from "../components/LoginForm.jsx";
import { useState, useEffect } from "react";

export function LoginPage(){

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [usernameState, setUsernameState] = useState("");
  
  return (
    <div>

        <LoginForm setLoginSuccess={setLoginSuccess} usernameState={usernameState}/>

        <CreateUser/>

    </div>
  );
}

