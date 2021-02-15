<<<<<<< HEAD
async function getResponse(query) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=100`, {
=======
const PER_PAGE = 50;
let lastQuery;

async function getResponse(query,) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=${PER_PAGE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/vnd.github.v3+json'
        },
    });
    lastQuery = query;
    return await response.json();
}

async function getNextPage(number) {
    console.log(number)
    const response = await fetch(`https://api.github.com/search/repositories?q=${lastQuery}&per_page=${PER_PAGE}&page=${number}`, {
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
        method: 'GET',
        headers: {
            'Content-Type': 'application/vnd.github.v3+json'
        },
    });
    return await response.json();
}

<<<<<<< HEAD
export {getResponse};
=======
export {getResponse, getNextPage, PER_PAGE};
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4

