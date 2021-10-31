import { Link } from "react-router-dom";

function Card({ name, fullName, link, flag, population, region, capital }) {
  return (
    <li className="country col-sm-6 col-md-4 col-xl-3 mb-4 d-flex justify-content-center">
      <div className="w-auto rounded overflow-hidden bg-white shadow-sm">
        <div className="country__img-wrapper">
          <img className="country__img d-block" src={flag} alt={'Flag of ' + name} />
        </div>
        <div className="country__inner p-3">
          <h3 className="country__title h4 mb-1 text-truncate" title={fullName}>
            <Link to={"/countries/" + link} className="btn-link font-weight-bold">{name}</Link>
          </h3>
          <dl className="country__info-list mb-1">
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Population: {population}</dt>
              <dd className="country__info-item country__info-item--population"></dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Region: {region}</dt>
              <dd className="country__info-item country__info-item--region"></dd>
            </div>
            <div className="d-flex">
              <dt className="font-weight-bold mr-1">Capital: {capital}</dt>
              <dd className="country__info-item country__info-item--capital text-truncate"></dd>
            </div>
          </dl>
        </div>
      </div>
    </li>
  )
}

export default Card;