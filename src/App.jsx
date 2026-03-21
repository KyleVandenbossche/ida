import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Hero from "./hero";
import Footer from "./Footer";
import Form from "./Form";
import Publications from "./Publications";

function HomePage() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/publications"
          element={
            <>
              <Publications />
              <Footer />
            </>
          }
        />

        <Route
          path="/book"
          element={
            <>
              <Form />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;