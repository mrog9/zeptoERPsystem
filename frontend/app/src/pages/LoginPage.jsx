import { CreateUser } from "../components/CreateUser.jsx";
import { LoginForm } from "../components/LoginForm.jsx"

export function LoginPage(){
  
  return (
    <div>
      <div id="LoginSection">

        <h1>WELCOME TO ZEPTO GROCERIES!</h1>

        <h2> SIGN IN TO CONTINUE</h2>

        <LoginForm />

      </div>

      <div id="CreateUserSection">

        <h2>OR CREATE AN ACCOUNT</h2>

        <CreateUser />

      </div>


    </div>
  );
}

