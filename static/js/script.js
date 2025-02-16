

function loadJoke() {
    const category = document.querySelector("#category").value;
    let url = 'https://api.chucknorris.io/jokes/random';

    if (category !== 'none') {
        url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Mostra la barzelletta nel div 'jokeContainer'
            document.querySelector("#jokeContainer").innerHTML = data.value;
        })
        .catch(error => {
            console.error('Errore nel recupero della barzelletta:', error);
            document.querySelector("#jokeContainer").innerHTML = "Oops! C'è stato un errore.";
        });
}

let btn = document.querySelector("#loadJokeBtn");
btn.addEventListener("click", loadJoke);
