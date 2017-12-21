import React from 'react';
import ReactDOM from 'react-dom';

class MainDisplayInstructions extends React.Component {
  render(){
    return(
      <div className="mainDisplay__instructions">
        <h1 className="mainDisplay__header">Instrukcja</h1>
        <ol className="mainDisplay--ol">
          <li>1. Stwórz listę fiszek lub wybierz gotową</li>
          <li>2. Zaznacz kilka list naraz by uczyc się wiecej!</li>
          <li>3. Graj!</li>
        </ol>
      </div>
    )
  }
}

export default MainDisplayInstructions;
