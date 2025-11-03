async function userposts() {
    try {
        const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Michael Jackson",
                job: "Carpenter"
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
userposts();