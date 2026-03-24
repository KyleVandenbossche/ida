import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="top-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span>IDA BYRD</span>
          <span>HILL</span>
        </Link>

        <nav className="nav-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/keynotes">KEYNOTES</Link>
          <Link to="/publications">PUBLICATIONS</Link>
          <Link to="/book" className="nav-button">
            BOOK IDA
          </Link>
        </nav>
      </div>
    </header>
  );
}