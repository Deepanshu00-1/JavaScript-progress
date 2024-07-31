"Use strict";
// https://restcountries.eu/rest/v2/

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function(country){
    // XML HTTP request function.
    const request = new XMLHttpRequest(); // it's an old way of doing AJAX in JavaScript
    request.open('GET',`https://countries-api-836d.onrender.com/countries/${country}`);
    request.send();
    // console.log(request.responseText);

    request.addEventListener('load', function(){
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class = "country">
    <img class = "country__img" src="${data.flag}"/>
    <div class = "country__data">
    <h3 class = "country__name">${data.name}</h3>
    <h4 class = "country__region">${data.region}</h4>
    <p class = "country__row"><span>🙎‍♂️</span>${(+data.population/1000000).toFixed(1)} people</p>
    <p class = "country__row"><span>🗣</span>${data.language[0].name}</p>
    <p class = "country__row"><span>💸</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.computedStyleMap.opacity = 1;
});
};

getCountryData('portugal');

const createHelloWorld = function(){
    return function(){
        return "Hello World";
    };
};
console.log(createHelloWorld());