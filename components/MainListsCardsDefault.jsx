import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';

class MainListsCardsDefault extends React.Component {
  state = {
    data: null
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
      console.log( data );
      this.setState({
        data: data,
      })
      });
  }

  render(){
    //Sprawdza czy fetch zwraca null
    if (this.state.data === null) {
      return <p>Loading...</p>;
    }

    const list = [];
    let counter = 0;
    for (let prop in this.state.data) {
      let item = (<li key={counter++} className="mainList__lists__default--li"><input className="mainList__lists__default--input" type="checkbox"/> {prop}</li>)
      list.push(item)
    }

    return(
      <div className="mainList__lists__defautl">
        <ul className="mainList__lists__default--ul">
          {list}
        </ul>
      </div>
    )
  }
}

export default MainListsCardsDefault;
