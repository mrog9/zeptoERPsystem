export async function newUserRequest(username){

    const url = "https://zeptoerpsystem.fly.dev/newuser";
    const message = {success: false, error: ""};

    try{

        const response = await fetch(url, {

            method: "POST",
            headers: {

                "Content-Type": "application/json"

            },
            body: JSON.stringify({username: username})

        });

        const data = await response.json();

        if (!data.exists){

            message.success = true;

        }else{

            const raw = await response.text();
            console.log(raw);

        }

    }catch(error){

        console.log(error);

        message.error = error;

    }

    return message;

}

