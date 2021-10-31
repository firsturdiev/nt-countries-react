import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header py-4 bg-light shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="text-dark font-weight-bold">Where in the world?</Link>
        <button className="site-header__toggle btn btn-sm btn-white" type="button">Dark Mode</button>
      </div>
    </header>
  )
}

export default Header;