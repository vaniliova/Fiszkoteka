import React from 'react';
import ReactDOM from 'react-dom';
import Instructions from '../components/MainDisplayInstructions.jsx';
import List from '../components/MainDisplayList.jsx';

class MainDisplay extends React.Component {

  render(){

    return(
      <div className="mainDisplay">
        {this.props.checkedLists.length === 0 ? <Instructions/> : <List checkedLists={this.props.checkedLists} data={this.props.data} />}
      </div>
    )
  }
}

export default MainDisplay;
