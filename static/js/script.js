// script.js
document.getElementById('loadJokeBtn').addEventListener('click', loadJoke);

function loadJoke() {
    const category = document.getElementById('category').value;
    let url = 'https://api.chucknorris.io/jokes/random';

    // Se è selezionata una categoria diversa da 'none', aggiungi la categoria all'URL
    if (category !== 'none') {
        url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Mostra la barzelletta nel div 'jokeContainer'
            document.getElementById('jokeContainer').textContent = data.value;
        })
        .catch(error => {
            console.error('Errore nel recupero della barzelletta:', error);
            document.getElementById('jokeContainer').textContent = "Oops! C'è stato un errore.";
        });
}
