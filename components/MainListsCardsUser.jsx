import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainLists.jsx';

class MainListsCardsUser extends React.Component {
  // state = {
  //   dataUser: null
  // }
  // componentDidMount() {
  // fetch('http://localhost:3000/data/user', {
  //       method : 'POST',
  //       headers : {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then( resp => resp.json())
  //     .then( dataUser => {
  //     console.log( dataUser );
  //     this.setState({
  //       dataUser: dataUser,
  //     })
  //     });
  // }

  render(){
    //Sprawdza czy fetch zwraca null
    return(
      <div className="mainList__lists__user">
        <ul className="mainList__lists__user--ul">
          {/* {listUser} */}
          <li className="mainList__lists__user--li"><input className="mainList__lists__default--input" type="checkbox"/>Under construction</li>
        </ul>
      </div>
    )
  }
}

export default MainListsCardsUser;
