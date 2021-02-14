const PER_PAGE = 50;

async function getResponse(query) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=${PER_PAGE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/vnd.github.v3+json'
        },
    });
    return await response.json();
}

export {getResponse, PER_PAGE};

