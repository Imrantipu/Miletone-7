const API_KEY = `d56b5956541282bcb22af37c44ff452d`;
// data fetch from api
const loadTemoperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
// displayed temperature dynamacally
const displayTemperature = temp =>{
    // const temperature = document.getElementById('temperature');
    // // console.log(temp.main.temp);  getting the temperature from api data
    // temperature.innerText = temp.main.temp;
    // // console.log(temp.weather[0].main);  getting the weather condition from api data
    setInnerTextById('temperature',temp.main.temp);
    setInnerTextById('condition',temp.weather[0].main);
}
// getting id and setting innertext in one function
const setInnerTextById = (id, text) =>{
   const temperature = document.getElementById(id);
    temperature.innerText = text;   
}

// talking search button input and updating only temperature
document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const city =searchField.value;
    // set city
    document.getElementById('city').innerText = city;
    loadTemoperature(city);
})



