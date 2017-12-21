import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';
import MainDisplay from '../components/MainDisplay.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import {Link} from 'react-router';

class Main extends React.Component {
  render(){
    return(
      <div className="app">
        <Nav />
        <div className="main">
          <div className="main__lists">
            <MainList checkedLists={this.props.checkedLists} add={this.props.add} remove={this.props.remove} data={this.props.data}/>
          </div>
          <div className="main__display">
            <MainDisplay checkedLists={this.props.checkedLists} data={this.props.data} />
          </div>
          <div className="main__playBtn">
            {this.props.checkedLists.length === 0 ? <span className="main__playBtn--btn">GRAJ</span> : <Link to="/game" className="main__playBtn--btn">GRAJ</Link>}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
