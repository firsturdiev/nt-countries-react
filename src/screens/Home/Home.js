import { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import Form from "../../components/Form/Form";

function Home() {
  const [countries, setCountries] = useState();
  const [countriesLoading, setCountriesLoading] = useState(true);

  useEffect(() => {
    setCountriesLoading(true);

    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(() => (
        data.slice(0, 100).map(country => (
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
      )))
      .then(() => setCountriesLoading(false));
  }, []);

  return (
    <>
      <Form setCountries={setCountries} />
      <CountriesList countries={countries} countriesLoading={countriesLoading} />
    </>
  )
}

export default Home;