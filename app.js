const handlecityname = async () => {
    let city = document.getElementById("usercity").value;

    let res = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/EN`, { 
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2a67ef3dd4msh00d17fd0a16722dp15c307jsn26d68d539899',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    });

    let data = await res.json();
    console.log(data.main);

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let temp_min = data.main.temp_min;
    let temp_max = data.main.temp_max;

    let weatherCondition = data.weather[0].main;
    console.log(weatherCondition);

    if (temp < 20) {
        document.body.style.backgroundImage = "url('cool.jpg')";
    } else if (temp > 30) {
        document.body.style.backgroundImage = "url('sunny.jpg')";
    } else if (weatherCondition.toLowerCase() === 'rain') {
        document.body.style.backgroundImage = "url('rainy.jpg')";
    } else {
        document.body.style.backgroundImage = "url('default.jpg')";
    }

    let div = document.createElement("div");

    let tem = document.createElement("h1");
    tem.innerText = `Temperature: ${((temp - 32) * (5 / 9)).toFixed(2)}°C`; 

    let hum = document.createElement("p");
    hum.innerText = `Humidity: ${humidity}%`; 

    let min_tem = document.createElement("p");
    min_tem.innerText = `Min Temperature: ${((temp_min - 32) * (5 / 9)).toFixed(2)}°C`;

    let max_tem = document.createElement("p");
    max_tem.innerText = `Max Temperature: ${((temp_max - 32) * (5 / 9)).toFixed(2)}°C`; 

    div.appendChild(tem);
    div.appendChild(hum);
    div.appendChild(min_tem);
    div.appendChild(max_tem);

    let weatherInfoDiv = document.getElementById("weather-info");
    weatherInfoDiv.innerHTML = '';
    weatherInfoDiv.appendChild(div);
};
