import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import transparentIda from "./transparent-ida.png";

const testimonials = [
  {
    quote:
      "Ida doesn't just inspire — she equips. Our team left with real tools and a completely new sense of direction.",
    name: "Marcus T.",
    role: "HR Director, Detroit",
  },
  {
    quote:
      "One of the most impactful speakers we've ever brought in. She reads the room and delivers every time.",
    name: "Priya M.",
    role: "Workforce Development Manager",
  },
  {
    quote:
      "Ida's message on career reinvention changed how I saw my own future. Absolutely transformational.",
    name: "Jasmine W.",
    role: "Program Participant",
  },
];

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
      <section className="hero-split">
        <div className="hero-split-inner">
          <div className="hero-left reveal">
            <p className="hero-intro">
              Detroit Metro • CEO • Author • Keynote Speaker
            </p>

            <h1 className="hero-title">
              <span>Helping Organizations</span>
              <span>Prepare for the</span>
              <span>Workforce Shift</span>
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
            <h1 className="hero-title-image">
              <span>Helping Organizations </span>
              <span>Prepare for the </span>
              <span>Workforce Shift </span>
            </h1>

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
          <p className="section-label-about">About</p>
          <h2 className="keynote-large">Work Is Changing. Are You Ready?</h2>
          <p>
            Ida Byrd-Hill delivers more than keynotes — she delivers a shift in
            perspective. With unmatched insight at the intersection of workforce
            innovation, technology, and leadership, Ida equips audiences with the
            clarity and confidence needed to navigate what’s next. If your
            organization is ready to challenge outdated thinking and activate
            real change, this is the conversation you want in the room.
          </p>
        </div>
      </section>

      <section id="keynotes" className="content-section dark-section">
        <div className="section-inner reveal">
          <div className="keynotes-stack">
            <div className="keynotes-row">
              <div className="keynotes-text">
                <h2>FORGET YOUR GRANDAD</h2>
                <p>
                  The rules of work have changed — and the organizations that
                  thrive will be the ones bold enough to rethink talent,
                  technology, and access. In this keynote, Ida challenges
                  outdated workforce models and reveals how leaders can build
                  future-ready teams today.
                </p>
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
                <h2>UNLEASH YOUR INNER CEO</h2>
                <p>
                  You can be busy, active, and still going nowhere — just like a
                  rocking chair. Ida shows audiences how to shift from motion to
                  momentum and lead with true CEO-level thinking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="book" className="content-section book-section">
  <div className="section-inner reveal">
    <p className="section-label-about">Book Ida</p>
    <h2 className="keynote-large">Ready to bring Ida to your event?</h2>
    <p>
      Click below to complete a booking inquiry form for speaking
      engagements, media appearances, workshops, or consulting.
    </p>

    <div className="book-section-cta-wrap">
      <Link to="/book" className="hero-cta">
        BOOK IDA NOW
      </Link>
    </div>
  </div>
</section>

      <section id="testimonials" className="content-section testimonials-section">
        <div className="section-inner reveal">
          <p className="section-label-about">Testimonials</p>
          <h2 className="keynote-large">The Room Always Remembers</h2>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <article className="testimonial-card reveal" key={i}>
                <div className="testimonial-quote-mark">“</div>
                <p className="testimonial-quote">{t.quote}</p>

                <div className="testimonial-meta">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}