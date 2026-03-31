async function getWeather() {
    const city = document.getElementById("cityInput").value;

    const apiKey = "YOUR_API_KEY"; // 🔑 replace this
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("city").innerText = data.name;
        document.getElementById("temp").innerText = data.main.temp + "°C";
        document.getElementById("desc").innerText = data.weather[0].description;

    } catch (error) {
        alert("City not found!");
    }
}
