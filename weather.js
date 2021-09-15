const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather) {
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if (weatherType.textContent == 'Clear')
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80')";
    else if (weatherType.textContent == 'Clouds')
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1604503590948-73bdc05edc76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80')";
    else if (weatherType.textContent == 'Haze')
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1543184168-524068f3e54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80')";
    else if (weatherType.textContent == 'Rain')
        document.body.style.backgroundImage = "url('https://feeds.abplive.com/onecms/images/uploaded-images/2021/09/07/e899ff058db6d305a1713dc5afa68bbc_original.jpg?impolicy=abp_cdn&imwidth=720')";
    else if (weatherType.textContent == 'Snow')
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1612576410237-c041783e523b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80')";
    else if (weatherType.textContent == 'Thunderstorm')
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500056764219-19f5e4f8f9f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    else if (weatherType.textContent == 'Mist')
        document.body.style.backgroundImage = "url('https://g1.img-dpreview.com/6EE631227F504EFEA444C933F46ADA79.jpg')";
    else
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1614434163906-5520f43d4e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80')";
}

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}