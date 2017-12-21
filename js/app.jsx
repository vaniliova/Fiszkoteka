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
  state={
    data: null,
    listDef: [],
  }

  addItemToList = (name) => {
    const list = this.state.listDef.slice();
    list.push(name);
    this.setState({
      listDef: list,
    })
  }
  removeItemFromList = (name) => {
    const list = this.state.listDef.filter((e) => {
      return e === name ? false : true;
    })
    this.setState({
      listDef: list,
    })
  }

  componentDidMount() {
  fetch('http://localhost:3000/data', {
        method : 'GET',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then( resp => resp.json())
      .then( data => {
        this.setState({
          data: data,
        })
    });
  }
  render(){
    if (this.state.data === null) {
      return null;
    }
    return(
      <Router history={hashHistory}>
        <Route path='/' component={(props) => <Main checkedLists={this.state.listDef} add={this.addItemToList} remove={this.removeItemFromList} data={this.state.data} {...props} /> } />
        <Route path='/game' component={(props) => <Game checkedLists={this.state.listDef} data={this.state.data} {...props} />} />
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
