const API_KEY =`01272c72854270fac846b1c6332be2c5`;
const searchbox = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data =>displayTemperature(data))

};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

 const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    console.log(temperature)
}
