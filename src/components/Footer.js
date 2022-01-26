import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear().toString()} by Ibas Majid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
