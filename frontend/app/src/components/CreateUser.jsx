import { useState } from "react"
import { validateUsername } from "../actions/customer/userRequests";

export function CreateUser({}){

    const [createdUserState, setCreatedUserState] = useState("");
    const [createdState, setCreatedState] = useState(false);

    const createUserForm = (

        <div id="CreateUserSection">

            <h2>OR CREATE AN ACCOUNT</h2>

            <div class="form">

                <input 
                    id="createUserForm"
                    autoComplete="off" 
                    type="text" 
                    placeholder="Username" 
                    onChange={e => setCreatedUserState(e.target.value)} />
                <button 
                    id="createUserId" 
                    type="button" 
                    onClick={() => validateUsername(createdUserState, setCreatedState)}
                >Create</button>


            </div>

            <p>Characters can only be from the alphabet and numbers</p>
            <p>Username can only be between 5-10 characters long</p>

        </div>

    )

    const successMessage = (<h2>SUCCESS: {createdUserState} account has been created!</h2>)

    return <>{createdState ? successMessage : createUserForm}</>

}