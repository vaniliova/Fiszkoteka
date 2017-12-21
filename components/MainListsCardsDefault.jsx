import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';

class MainListsCardsDefault extends React.Component {
  handleChange = (e) => {
    if (e.currentTarget.checked) {
      this.props.add(e.currentTarget.dataset.name);
    }else {
      this.props.remove(e.currentTarget.dataset.name);
    }
  }
  render(){
    //Sprawdza czy fetch zwraca null
    if (this.props.data === null) {
      return <p>Loading...</p>;
    }
    console.log(this.props);
    const list = [];
    let counter = 0;
    for (let prop in this.props.data) {
      let item = (<li key={counter++} className="mainList__lists__default--li"><input checked={this.props.checkedLists.indexOf(prop) >= 0 ? true : false } data-name={prop} onChange={this.handleChange} className="mainList__lists__default--input" type="checkbox"/> {this.props.data[prop][0].titlePL} - {this.props.data[prop][0].titleES}</li>)
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
