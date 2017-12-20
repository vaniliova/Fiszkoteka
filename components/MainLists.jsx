import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/MainListsSearch.jsx';
import Default from '../components/MainListsCardsDefault.jsx';
import User from '../components/MainListsCardsUser.jsx';
import Create from '../components/MainListsCreate.jsx';

class MainList extends React.Component {
  state = {
    filterText: '',
    checked: false
  }
  render(){
    console.log(this.props.data, "MainList");
    return(
      <div className="mainList">
        <Search />
        <div className="mainList__lists">
          <Default add={this.props.add} remove={this.props.remove} data={this.props.data}/>
          <p className="mainList__user">Fiszki użytkowników</p>
          <User />
        </div>
        <Create />
      </div>
    )
  }
}

export default MainList;
