async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Request failed status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Request failed status: ${error.message}`);
    }
}