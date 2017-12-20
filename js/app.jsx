import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';
import Game from '../components/Game.jsx';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Nav />
        <Router history={hashHistory}>
          <Route path='/' component={Main} />
          <Route path='/game' component={Game} />
        </Router>
        <Footer />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
