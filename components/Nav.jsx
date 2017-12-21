import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

class Nav extends React.Component {
  render(){
    return(
      <div className="nav">
        <Link to="/" className="nav__logo">
          &#123;FiSzKoTeKa&#125;
        </Link>
        <div className="nav__lang">
          <img className="nav__lang__flag" src="images/spain.jpg" alt="flagES" />
        </div>
      </div>
    )
  }
}

export default Nav;
