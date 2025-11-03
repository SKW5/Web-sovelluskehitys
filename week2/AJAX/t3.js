async function getUser() {
    try {
        const response = await fetch("https://reqres.in/api/unknown/23", {
            method: "GET",
            headers: {
                "x-api-key": "reqres-free-v1",
            }
        });
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("This is a error message error: ", error.message);
    }
}

getUser();