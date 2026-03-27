import { Link } from "react-router-dom";
import React from "react";

const books = [
  {
    title: "Invisible Talent Market",
    subtitle: "Lorem ipsum dolor sit amet",
    description:
      "In Invisible Talent Market, Ida Byrd-Hill exposes one of the most overlooked challenges facing modern organizations: the vast pool of capable talent that remains unseen, undervalued, and underutilized. Drawing from her deep expertise across workforce development, executive search, and technology, Ida reveals how businesses can identify, develop, and activate hidden talent to drive innovation, growth, and long-term competitive advantage. This book challenges leaders to rethink traditional hiring models and offers a forward-thinking roadmap for building more inclusive, future-ready workforces.",
    buttonText: "Buy Book",
    link: "#",
  },
  {
    title: "Publication Title Two",
    subtitle: "Consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This is a placeholder for a second title, workbook, or featured publication.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    title: "Publication Title Three",
    subtitle: "Sed do eiusmod tempor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Use this card for another book, guide, journal, or digital resource.",
    buttonText: "Buy Book",
    link: "#",
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
                <div className="publication-cover-inner">
                  <span className="publication-cover-label">Book Cover</span>
                </div>
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

      <section className="publications-feature">
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
      </section>
    </div>
  );
}