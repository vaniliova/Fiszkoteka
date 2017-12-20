import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';
import MainDisplay from '../components/MainDisplay.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import {Link} from 'react-router';

class Main extends React.Component {

  render(){
    console.log(this.props, "Main");
    return(
      <div className="app">
          <Nav />
        <div className="main">
          <div className="main__lists">
            <MainList add={this.props.add} remove={this.props.remove} data={this.props.data}/>
          </div>
          <div className="main__display">
            <MainDisplay />
          </div>
          <div className="main__playBtn">
            <Link to="/game" className="main__playBtn--btn">GRAJ</Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
