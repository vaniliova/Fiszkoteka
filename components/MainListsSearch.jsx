import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';

class MainListsSearch extends React.Component {
  render(){
    return(
      <div className="mainList__search">
        <input className="mainList__search--input" type="text" placeholder="Szukaj zbioru fiszek..."/>
      </div>
    )
  }
}

export default MainListsSearch;
