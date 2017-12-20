import React from 'react';
import ReactDOM from 'react-dom';
import Instructions from '../components/MainDisplayInstructions.jsx';

class MainDisplay extends React.Component {
  render(){
    return(
      <div className="mainDisplay">
        <Instructions />
      </div>
    )
  }
}

export default MainDisplay;
