import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CountryInfo from "../../components/CountryInfo/CountryInfo";

function Country() {
  const [country, setCountry] = useState();
  const [countryLoading, setCountryLoading] = useState(true);
  const { url } = useParams();
  const countryName = url.split('-').join(' ');

  useEffect(() => {
    setCountryLoading(true);

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => response.json())
      .then(data => setCountry(() => (
        data.map(country => (
          {
            name: country.name.common,
            nativeName: country.name.official,
            flag: country.flags.svg,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            domain: country.tld,
            currencies: Object.keys(country.currencies),
            languages: Object.values(country.languages).join(', ')
          }
        ))[0]
      )))
      .then(() => {
        setCountryLoading(false);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName]);

  return (
    <>
      <div class="row mb-4 mx-0">
        <Link to="/" class="back-btn btn btn-white shadow-sm">Back</Link>
      </div>

      {
        (countryLoading)
          ? <strong>Country info is loading...</strong>
          : <CountryInfo {...country} />
      }
    </>
  )
}

export default Country;