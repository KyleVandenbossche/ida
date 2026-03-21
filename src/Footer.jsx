import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">

        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#keynotes">Keynotes</a>
          <a href="#book">Book Ida</a>
        </div>

        <div className="footer-right">
          <p>© {new Date().getFullYear()} IDA BYRD HILL </p>
        </div>
      </div>
    </footer>
  );
}