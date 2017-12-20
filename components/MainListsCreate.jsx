import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';

class MainListsCreate extends React.Component {
  create() {
    console.log("tworze");
  }
  render(){
    return(
      <div className="mainList__create">
        <button onClick={this.create} className="main__list__create--btn">Stwórz fiszki</button>
      </div>
    )
  }
}

export default MainListsCreate;
