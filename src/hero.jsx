import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import transparentIda from "./transparent-ida.png";

export default function Hero() {
  const [navShrunk, setNavShrunk] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setNavShrunk(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page">
      <header className={`top-nav ${navShrunk ? "shrink" : ""}`}>
        <Link to="/" className="nav-logo">
          <span>Ida Byrd</span>
          <span>Hill</span>
        </Link>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#keynotes">Keynotes</a>
          <Link to="/publications">Publications</Link>
          <Link to="/book" className="nav-button">
            Book Ida
          </Link>
        </nav>
      </header>

      <section className="hero-split">
        <div className="hero-split-inner">
          <div className="hero-left reveal">
            <p className="hero-intro">
              Detroit Metro • CEO • Author • Keynote Speaker
            </p>

            <h1 className="hero-title">
              <span>Lorem ipsum dolor</span>
              <span>sit amet,</span>
              <span>consectetur</span>
              <span>adipiscing elit</span>
            </h1>

            <p className="hero-description">
              Ida Byrd-Hill is the CEO of Automation Workz — ranked among the Top
              10 Cybersecurity Bootcamps in the U.S. — training front-liners in
              cybersecurity, data analytics, network engineering, and software
              development.

              A prolific author of eight books, including Invisible Talent
              Market, Ida brings rare expertise across HR, executive search,
              finance, and technology to every stage she steps on.

              BA in Economics · University of Michigan – Ann Arbor
              MBA · Jack Welch Management Institute
            </p>

            <Link to="/book" className="hero-cta">
              BOOK IDA NOW
            </Link>
          </div>

          <div className="hero-right reveal">
            <p className="hero-mobile-intro">
              Detroit Metro • CEO • Author • Keynote Speaker
            </p>

            <img
              src={transparentIda}
              alt="Ida Byrd Hill"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section id="about" className="content-section light-section">
        <div className="section-inner reveal">
          <p className="section-label">About</p>
          <h2 className="keynote-large">
            A voice that connects vision with action.
          </h2>
          <p>
            This section can later become Ida’s full bio. For now, it gives the
            homepage structure and helps the navigation feel complete.
          </p>
        </div>
      </section>

      <section id="keynotes" className="content-section dark-section">
        <div className="section-inner reveal">
          <div className="keynotes-stack">
            <div className="keynotes-row">
              <div className="keynotes-text">
                <p className="section-label">Keynotes</p>
                <h2>Topics that move audiences forward.</h2>
                <p>FORGET YOUR GRANDAD</p>
              </div>

              <div className="keynotes-video">
                <div className="video-wrapper">
                  <div className="video-overlay">
                    <span>▶</span>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/8GRyAinrsgY?rel=0"
                    title="Ida Byrd Hill keynote video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="keynotes-row reverse">
              <div className="keynotes-video">
                <div className="video-wrapper">
                  <div className="video-overlay">
                    <span>▶</span>
                  </div>

                  <iframe
                    src="https://www.youtube.com/embed/mdsI_EXEfBc?rel=0"
                    title="Ida Byrd Hill keynote video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="keynotes-text">
                <p className="section-label">Featured Talk</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>UNLEASH YOUR INNER CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="content-section accent-section">
        <div className="section-inner reveal">
          <p className="section-label">Book Ida</p>
          <h2>Ready to bring Ida to your event?</h2>
          <p>
            Click below to complete a booking inquiry form for speaking
            engagements, media appearances, workshops, or consulting.
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link to="/book" className="hero-cta">
              BOOK IDA NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}