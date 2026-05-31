import { authorizeUser } from "../actions/customer/userRequests";

export function LoginForm({setLoginSuccess, setUsernameState, usernameState}){

    return (

        <div class="form">

            <h1>WELCOME TO ZEPTO GROCERIES!</h1>

            <h2> SIGN IN TO CONTINUE</h2>

            <form id="loginForm">

                <input 
                    id="usernameId" 
                    autoComplete="off" 
                    type="text" 
                    placeholder="Enter Username" 
                    onChange={(e) => setUsernameState(e.target.value)}>
                </input>
                <button id="loginId" type="button" onClick={() => authorizeUser(usernameState, setLoginSuccess)}>Login</button>

            </form>


        </div>

    );

}