async function getResponse(query) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=100`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/vnd.github.v3+json'
        },
    });
    return await response.json();
}

export {getResponse};

