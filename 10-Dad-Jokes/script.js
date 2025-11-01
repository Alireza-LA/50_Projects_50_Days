const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
    // Show loading message
    jokeEl.innerHTML = '<p class="loading">Loading joke...</p>';

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await fetch('https://icanhazdadjoke.com', config);
        const data = await res.json();
        jokeEl.innerHTML = data.joke;
    } catch (err) {
        jokeEl.innerHTML = 'Oops! Failed to load a joke 😅';
        console.error(err);
    }
}


// USING .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config).then(res => res.json().then(data =>
//         jokeEl.innerHTML = data.joke
//     ))
// }