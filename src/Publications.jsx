import { Link } from "react-router-dom";
import React from "react";
import cultureRewired from "./culture-rewired.jpg";
import invisibleTalentMarket from "./invisible-talent-market.jpg";

const books = [
  {
    title: "Invisible Talent Market",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "In Invisible Talent Market, Ida Byrd-Hill exposes one of the most overlooked challenges facing modern organizations: the vast pool of capable talent that remains unseen, undervalued, and underutilized. Drawing from her deep expertise across workforce development, executive search, and technology, Ida reveals how businesses can identify, develop, and activate hidden talent to drive innovation, growth, and long-term competitive advantage. This book challenges leaders to rethink traditional hiring models and offers a forward-thinking roadmap for building more inclusive, future-ready workforces.",
    buttonText: "Buy Book",
    link: "#",
    image: invisibleTalentMarket,
  },
  {
    title: "Culture Re-Wired: Unleash Your Inner AI CEO",
    subtitle: "Consectetur adipiscing elit",
    description:
      "In a world where artificial intelligence (AI) is transforming everything — how we work, communicate, and innovate —Culture Re-Wired: Unleash Your Inner AI CEO reveals the powerful truth: it’s not the technology that drives change. It’s the culture. This groundbreaking book empowers CHROs, CFOs, CIOs, CLOs and aspiring leaders to rewire their organizations from the inside out, starting with the overlooked backbone of every company—front-liners. Whether you're leading a startup, a mid-market manufacturer, or a global enterprise, this book offers a clear roadmap to activate your Inner CEO mindset and unlock exponential profits.",
    buttonText: "Learn More",
    link: "#",
    image: cultureRewired,
  },

];

export default function Publications() {
  return (
    <div className="publications-page">

      <section className="publications-hero">
        <div className="publications-hero-inner">
          <p className="section-label">Publications</p>
          <h1 className="publications-title">
            Books, insights, and thought leadership.
          </h1>
          <p className="publications-subtitle">
            Explore Ida Byrd Hill’s publications, resources, and featured works.
            This is a foundation page that can later include direct purchase
            links, testimonials, featured excerpts, and media coverage.
          </p>
        </div>
      </section>

      <section className="publications-grid-section">
        <div className="publications-grid">
          {books.map((book, index) => (
            <article className="publication-card" key={index}>
<div className="publication-cover">
  {book.image ? (
    <img
      src={book.image}
      alt={book.title}
      className="publication-cover-img"
    />
  ) : (
    <div className="publication-cover-inner">
      <span className="publication-cover-label">Book Cover</span>
    </div>
  )}
</div>

              <div className="publication-content">
                <p className="publication-subtitle">{book.subtitle}</p>
                <h2>{book.title}</h2>
                <p>{book.description}</p>

                <a
                  href={book.link}
                  className="publication-button"
                  target={book.link.startsWith("http") ? "_blank" : undefined}
                  rel={book.link.startsWith("http") ? "noreferrer" : undefined}
                >
                  {book.buttonText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="publications-feature">
        <div className="publications-feature-inner">
          <div className="publications-feature-left">
            <p className="section-label">Featured Work</p>
            <h2>Use this space to spotlight a flagship title.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. This
              section can later include a larger cover image, quote, excerpt,
              or a direct retailer link.
            </p>
          </div>

          <div className="publications-feature-right">
            <div className="featured-book-placeholder">
              <span>Featured Book</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}