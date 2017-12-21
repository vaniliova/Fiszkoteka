import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render(){
    return(
      <div className="footer">
        <div className="footer__info">
          <span className="footer__logo">&#123;FiSzKoTeKa&#125;</span>
          <span className="footer__slogan">Korzystaj z gotowych zestawów fiszek i ucz się słownictwa grając!</span>
        </div>
        <p className="footer__author">by Dagmara Lewandowska</p>
      </div>
    )
  }
}

export default Footer;
