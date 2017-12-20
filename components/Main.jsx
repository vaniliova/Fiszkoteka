import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';
import MainDisplay from '../components/MainDisplay.jsx';
import {Link} from 'react-router';

class Main extends React.Component {

  render(){
    return(
      <div className="main">
        {/* listy defaultowe */}
        <div className="main__lists">
          <MainList />
        </div>
        {/* listy użytkowników */}
        <div className="main__display">
          <MainDisplay />
        </div>
        {/* Przycisk graj */}
        <div className="main__playBtn">
          <Link to={"/game"} className="main__playBtn--btn">GRAJ</Link>
        </div>
      </div>
    )
  }
}

export default Main;
