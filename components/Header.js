import React from "react";

const Header = () => {
  return (
    <header className="contain-header">
      <div className="top-header">
        <div>
          <span className="register">Anmelden</span>
          <span className="register-be">Registrieren</span>
        </div>
        <div>
          <span className="tel-number">+49 521 940240456</span>
          <span className="e-mail">info@conliving.de</span>
        </div>
      </div>
      <div className="brand-header">
        <div>
          <img
            className="logo"
            src="https://www.containhaus.de/assets/img/RedBlack.webp"
          />
        </div>
        <div>
          <input
            className="search-bar"
            placeholder="Hangi containeri arıyorsunuz?"
            type="text"
          />
        </div>
        <div>cart</div>
      </div>
      <div className="bottom-header">
        <nav>
          <ul className="nav">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contaıner</a>
            </li>
            <li>
              <a href="">Kurze Angebote</a>
            </li>
            <li>
              <a href="">Referenzen</a>
            </li>
            <li>
              <a href="">Anwendungbereiche</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
