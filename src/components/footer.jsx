import React from "react";
import '../extra-css/footer.css'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-div">
      <p className="footer-wish">MAY YOUR DAY BE FILLED WITH PEACE ✞</p>
      <a href="/hub.html"  rel="noopener noreferrer" className="showcase-link"><p className="copy-right">© {year} • Divine Morsels • All glory to God</p></a>
    </div>
  );
};

export default Footer;
