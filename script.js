document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c8b59ad4d0bfff967e0c2214c6c8ce45'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = data.name;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = data.main.temp;
                document.getElementById('weatherResult').classList.remove('hidden');
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching the weather data.');
        });
});
