import { useRef } from "react";

function Form({ setCountries }) {
  const searchRef = useRef();

  function handleSearch(e) {
    e.preventDefault();

    fetch(`https://restcountries.com/v3.1/name/${searchRef.current.value}`)
      .then(response => response.json())
      .then(data => {
        if (data.status !== 404) {
          setCountries(() => (
            data.map(country => (
              {
                name: country.name.common,
                fullName: country.name.official,
                link: country.name.common.split(' ').join('-').toLowerCase(),
                capital: country.capital,
                flag: country.flags.png,
                population: country.population,
                region: country.region,
                key: country.cioc || country.ccn3
              }
            ))
          ))
        } else {
          setCountries(null);
        }
      })
  }

  return (
    <form onSubmit={handleSearch} className="search-form row justify-content-between mx-0 mb-5" action="https://echo.htmlacademy.ru" method="GET">
      <input ref={searchRef} className="col-sm-6 search-form__input form-control border-0 shadow-sm mb-4 mb-sm-0 py-4" type="search"
        placeholder="Search for a country…" name="q" required />
      <select className="search-form__select col-7 col-sm-4 custom-select border-0 shadow-sm h-auto" name="region" defaultValue="all">
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
}

export default Form;