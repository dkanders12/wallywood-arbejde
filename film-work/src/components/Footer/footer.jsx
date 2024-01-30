import React from "react";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="left">
        <h4>WALLYWOOD</h4>
        <p>
          Øster Uttrupvej 1<br /> 9000 Aalborg
        </p>
      </div>
      <div className="middle">
        <p>
          CVR: 12345678
          <br /> MAIL: info@plakatshoppen.dk
          <br /> MOBIL: +45 9812 3456
        </p>
      </div>
      <div className="right">
        <i className="fa-brands fa-square-pinterest"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
      </div>
    </footer>
  );
};
