const API_KEY = `e0815c6ba57ab07936d21ff10b50ace3
`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value
    document.getElementById('city-name').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

    const icon = document.getElementById('icon-image');
    icon.setAttribute('src', url);
}