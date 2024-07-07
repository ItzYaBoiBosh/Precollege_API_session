document.getElementById('fetchJokesButton').addEventListener('click', function() {
    fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(jokes => {
            const jokesContainer = document.getElementById('jokesContainer');
            jokesContainer.innerHTML = ''; 

            jokes.forEach(joke => {
                const jokeElement = document.createElement('div');
                jokeElement.className = 'joke';

                const setupElement = document.createElement('p');
                setupElement.textContent = joke.setup;
                jokeElement.appendChild(setupElement);

                const punchlineElement = document.createElement('p');
                punchlineElement.textContent = joke.punchline;
                jokeElement.appendChild(punchlineElement);

                jokesContainer.appendChild(jokeElement);
            });
        })
        .catch(error => {
            console.error('Error fetching jokes:', error);
        });
});
