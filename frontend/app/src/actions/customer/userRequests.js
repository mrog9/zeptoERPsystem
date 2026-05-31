export function validateUsername(username, setCreateStatus){

    const hasValidLength = username.length <= 10 && username.length >= 5;
    const hasValidChars = /^[A-za-z0-9]+/.test(username);

    if (hasValidLength && hasValidChars){

        setCreateStatus(true);
        newUserRequest(username);

    }

}

async function newUserRequest(username){

    console.log(username);


}

export function authorizeUser(username, setLoginSuccess){

    console.log(username);

    setLoginSuccess(true);

} 