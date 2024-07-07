document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const city = document.getElementById('cityInput').value.trim();
    const lat = document.getElementById('latInput').value.trim();
    const lon = document.getElementById('lonInput').value.trim();
    const apiKey = 'c8b59ad4d0bfff967e0c2214c6c8ce45'; 
    let url = '';
    
    if (city && (lat || lon)) {
        alert('Please enter either a city name or latitude and longitude, not both.');
        return;
    } else if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else {
        alert('Please enter a city name or latitude and longitude.');
        return;
    }
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = data.name || `${lat}, ${lon}`;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = data.main.temp;
                document.getElementById('weatherResult').classList.remove('hidden');
            } else {
                document.getElementById('weatherResult').classList.add('hidden');
                alert('Location not found! Please enter a valid city name or coordinates.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching the weather data.');
        });
});
