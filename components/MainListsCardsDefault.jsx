import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';

class MainListsCardsDefault extends React.Component {
  handleChange = (e) => {
    console.log(e.currentTarget.checked);
    console.log(e.currentTarget.dataset.name);
    if (e.currentTarget.checked) {
      this.props.add(e.currentTarget.dataset.name);
    }else {
      this.props.remove(e.currentTarget.dataset.name);
    }
  }
  render(){
    console.log(this.props.add, this.props.remove, "default");

    //Sprawdza czy fetch zwraca null
    if (this.props.data === null) {
      return <p>Loading...</p>;
    }

    const list = [];
    let counter = 0;
    for (let prop in this.props.data) {
      let item = (<li key={counter++} className="mainList__lists__default--li"><input data-name={prop} onChange={this.handleChange} className="mainList__lists__default--input" type="checkbox"/> {prop}</li>)
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
