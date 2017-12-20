import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render(){
    return(
      <div className="footer">
        <div className="footer__info">
          <span className="footer__logo">&#123;FiSzKoTeKa&#125;</span>
          <span className="footer__slogan">Twórz własne fiszki ze słówkami lub korzystaj z gotowych list. Ucz się słownictwa i graj!</span>
        </div>
        <p className="footer__author">by Dagmara Lewandowska</p>
      </div>
    )
  }
}

export default Footer;
