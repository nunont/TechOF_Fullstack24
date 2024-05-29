
const input = document.getElementById('iCountry');
const button = document.getElementById('searchButton');
const output = document.getElementById('countries-section');

button.addEventListener('click', () => {
    var country = input.value;

    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
               let countryDiv = createCountryDiv(country);
                output.appendChild(countryDiv);
            });
        })
        .catch(error => {
            console.log(error);
            alert('Country not found');
        });

    input.value = '';
});

const createCountryDiv = (country) => {
    const countryDiv = document.createElement('div');
    countryDiv.innerHTML = `
        <h2>${country.name}</h2>
        <img src="${country.flag}" alt="Afghanistan" style="width: 300px;">
        <p><b>Capital:</b> ${country.capital}</p>
        <p><b>Population:</b> ${country.population}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Sub Region:</b> ${country.subregion}</p>
        <p><b>Language:</b> ${country.languages.map(m => m.name).join(', ')}</p>
        <p><b>Border:</b> ${country.borders.join(', ')}</p>
    `;
    countryDiv.classList.add('country');
    return countryDiv;
}


