import React, { useState } from "react";
import "../styles/Landing.css";
import ModalForm from "../components/ModalForm";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";

const Landing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const SearchIcon = IoSearchOutline as unknown as React.FC;
  const UserIcon = FaRegUser as unknown as React.FC;
  const HamburgerIcon = RxHamburgerMenu as unknown as React.FC;
  const PlayIcon = FaPlay as unknown as React.FC;

  return (
    <div className="landing-container">
      {/* Modal */}
      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}

      {/* Header */}
      <header className="header">
        <div className="logo">TRAVEL SHOP</div>
        <div className="logo-res">deep-O</div>
        <nav>
          <a href="#">Buy</a>
          <a href="#">Curate</a>
        </nav>
        <div className="search-contact">
          <input type="text" placeholder="Search" />
        </div>
        <a href="#">Contact Us</a>
        <div className="mobile-nav">
          <SearchIcon />
          <UserIcon />
          <HamburgerIcon />
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-gif-bg"></div>
        <div className="overlay">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore
            <br /> et dolore magna aliqua
          </p>
          <button className="desktop-text" onClick={() => setIsModalOpen(true)}>
            Start Curating
          </button>
          <button className="mobile-text" onClick={() => setIsModalOpen(true)}>
            Explore Catalogue
          </button>
          <div className="video-logo">
            <PlayIcon />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="feature-cards">
          <div className="card">
            <div className="icon">📈</div>
            <p>
              Lorem <strong>ipsum</strong>
            </p>
          </div>
          <div className="card">
            <div className="icon">🔁</div>
            <p>
              Lorem <strong>ipsum</strong>
            </p>
          </div>
          <div className="card">
            <div className="icon">💰</div>
            <p>
              Lorem <strong>ipsum</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="left">
          <h2>
            <strong>
              Lorem ipsum <br className="highlight-h2-br" />
            </strong>{" "}
            <span>dolor</span>
          </h2>
          <button className="left-top-button">sit amet</button>
        </div>
        <div className="right">
          <div className="twoDiv">
            <div className="box">
              <span className="number">01</span>
              <br />
              <small>Sit Amet</small>
            </div>
            <div className="box">
              <span className="number">02</span>
              <br />
              <small>
                <span>Lorem</span> Ipsum Dolor Sit Amet
              </small>
            </div>
          </div>
          <div className="box">
            <span className="number">03</span>
            <br />
            <small>
              Consectetur <span>Adipiscing</span> Elit, Ut Labore
              <br /> Et Dolore
            </small>
          </div>
          <button className="bottom-button">sit amet</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">TRAVEL SHOP</div>
        <div className="footer-links">
          <ul>
            <li>sit amet</li>
            <li>ipsum</li>
            <li>ut labore</li>
            <li>consectetur</li>
          </ul>
          <ul>
            <li>sit amet</li>
            <li>ipsum</li>
            <li>ut labore</li>
            <li>consectetur</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
