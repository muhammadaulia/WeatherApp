var inputval = document.querySelector('#cityInput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityOutput');
var desc = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
apiKey = "48a8c26f16681cc94c902c323115c6df";

// conversion from kelvin to celcius
function convertion(val) {
    return (val-273).toFixed(2);
}

// fetch
btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apiKey)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var description = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML= `City: ${nameval}`
        temp.innerHTML = `Temperature: ${convertion(temperature)} Celcius`
        description.innerHTML = `Conditions: ${desc}`
        wind.innerHTML = `Wind Speed: ${windspeed} km/h`
    })
    .catch(err => alert('The data you provided are incorrect'))
})