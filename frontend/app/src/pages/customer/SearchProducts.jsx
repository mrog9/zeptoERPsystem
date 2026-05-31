import { useLocation } from "react-router-dom";

export function SearchProducts(){

    const location = useLocation();

    return(

        <div>

            <h2>WELCOME {location.state.username}!</h2>

        </div>

    )


}