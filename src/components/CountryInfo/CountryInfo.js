function CountryInfo({ name, nativeName, flag, population, region, subregion, capital, domain, currencies, languages }) {
  return (
    <div className="country row flex-column flex-md-row justify-content-lg-between align-items-start mx-0 flex-nowrap">
      <img className="country__flag mb-4 mb-md-0 flex-md-grow-1 flex-lg-grow-0 mr-md-4" src={flag} width="500" alt={"Flag of " + name} />

      <div className="country__info flex-shrink-0">
        <h3 className="mb-4">{name}</h3>
        <div className="mb-4 d-lg-flex ">
          <dl className="country__info-list mb-4 mr-lg-5">
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Native Name:</dt>
              <dd>{nativeName}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Population:</dt>
              <dd>{population}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Region:</dt>
              <dd>{region}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Sub Region:</dt>
              <dd>{subregion}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Capital:</dt>
              <dd>{capital}</dd>
            </div>
          </dl>

          <dl className="country__info-list">
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Top Level Domain:</dt>
              <dd>{domain}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Currencies:</dt>
              <dd>{currencies}</dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Languages:</dt>
              <dd>{languages}</dd>
            </div>
          </dl>
        </div>

        {/* <div className="country__borders">
          <h3 className="mb-3">Border Countries:</h3>
          <ul className="d-flex list-unstyled">
            {
              borders.map(border => (
                <li>
                  <Link to={'/countries/' + border.link} className="btn btn-sm shadow-sm px-4 mr-2" type="button">{border.name}</Link>
                </li>
              ))
            }
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default CountryInfo;