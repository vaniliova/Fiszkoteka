import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  render(){
    return(
      <div className="nav">
        <div className="nav__logo">
          &#123;FiSzKoTeKa&#125;
        </div>
        <div className="nav__lang">
          <img className="nav__lang__flag" src="images/england.png" alt="flagGB" />
          <img className="nav__lang__flag" src="images/spain.jpg" alt="flagES" />
        </div>
      </div>
    )
  }
}

export default Nav;
