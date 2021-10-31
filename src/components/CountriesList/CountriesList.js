import Card from "../Card/Card";

function CountriesList({ countries, countriesLoading }) {
  return (
    <ul className="countries-list list-unstyled row mx-0" aria-label="Countries list">
      {
        (() => {
          if (countriesLoading)
            return <strong>Countries are loading...</strong>
          else if (!countries)
            return <strong>No country found</strong>;
          else {
            return countries.map(country =>
              <Card {...country} />
            )
          }
        })()
      }
    </ul>
  )
}

export default CountriesList;