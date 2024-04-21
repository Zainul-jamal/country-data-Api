function searchCountry() {
    const searchInput = document.getElementById('searchInp').value.trim().toLowerCase(); // Trim to remove leading and trailing spaces
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    
    if (searchInput === '') {
        alert('Search input is empty');
        return; 
    }
    
    fetch('https://restcountries.com/v3.1/all')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        const filteredCountries = data.filter(country => country.name.common.toLowerCase().includes(searchInput));
        
        filteredCountries.forEach(country => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          card.innerHTML = `
          <div class="card-body col-sm-8">
            <h3>Country: ${country.name.common}</h3>
            <img src="${country.flags.svg}" alt="${country.name.common}">
            <div>
              <h4>Capital: ${country.capital}</h4>
              <p>Region: ${country.region}</p>
              <p>Population: ${country.population}</p>
            </div>
          </div>
          <h6>Project by Zain ul abedin S/O Md Jamal</h6>
          `;
          cardsContainer.appendChild(card);
        });
      })
      .catch(function(error) {
        console.log('Error fetching data:', error);
      });
}
