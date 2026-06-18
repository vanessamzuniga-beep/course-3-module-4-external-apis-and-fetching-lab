// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
document
    .getElementById("fetch-alerts")
    .addEventListener("click", handleClick)

function handleClick() {
    const input = document.getElementById("state-input")
    const state = input.value.trim().toUpperCase()

    fetchWeatherAlerts(state)

    input.value = ""
}

// Create function to make a GET request of API 
function fetchWeatherAlerts(state) {

    // Use fetch to retrieve weather alerts based on provided state abbr
    fetch(`https://api.weather.gov/alerts/active?area=${state}`)
    // Parse the JSON response
    .then(response => response.json())
    // Console.log data to console
    .then(data => displayAlerts(data))
    // Handle API errors
    .catch(error => console.log("Error fetching data:", error))

}

// Create function to dynamically update the DOM with weather
function displayAlerts(data) {
    const alertsDisplay = document.getElementById("alerts-display")

    alertsDisplay.innerHTML = ""

    const list = document.createElement("ul")

    data.features.forEach(feature => {
        const li = document.createElement("li")
        li.textContent = feature.properties.headline
        list.appendChild(li)
    })

    alertsDisplay.appendChild(list)
}