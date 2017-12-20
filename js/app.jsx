import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main.jsx';
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
        <Router history={hashHistory}>
          <Route path='/' component={Main} />
          <Route path='/game' component={Game} />
        </Router>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
