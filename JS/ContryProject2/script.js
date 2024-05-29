
const iCountry = document.getElementById('iCountry');
const searchButton = document.getElementById('btnSearch');

const countryResults = document.getElementById('country-results');

searchButton.addEventListener('click', searchCountry);

var searchedCountries = [];

function searchCountry() {

    let country = iCountry.value;

    if (searchedCountries.some(s => s == country)){
        alert('O pais já existe')
    }
    else {
        fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            let div = createCountryDiv(data[0])
            countryResults.appendChild(div);
            searchedCountries.push(country);
        });
    }
    
}

function createCountryDiv(country) {
    const countryDiv = document.createElement('div');

    let currencies = country.currencies.map(c => c.name + ' ' + c.symbol).join(', ');
    let languages = country.languages.map(l => l.name).join(', ');

    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <img src="${country.flag}" alt="" >
    <p>Capital: <span>${country.capital}</span></p>
    <p>População: <span>${country.population}</span></p>
    <p>Moedas: <span>${currencies}</span></p>
    <p>Região: <span>${country.region}</span></p>
    <p>Sub-Região: <span>${country.subregion}</span></p>
    <p>Idiomas: <span>${languages}</span></p>`;

    countryDiv.classList.add('country');
    
    return countryDiv;
}