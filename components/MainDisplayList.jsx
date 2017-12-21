import React from 'react';
import ReactDOM from 'react-dom';

class MainDisplayList extends React.Component {

  render(){
    let listToDisp = [];
    this.props.checkedLists.map((e,i) => {
      return listToDisp.push(this.props.data[e][0].list)
    })

    let listTitle = [];
    let listElements = [];
    for (let prop in this.props.data) {
      if (this.props.checkedLists.indexOf(prop) >= 0) {
        listTitle.push(this.props.data[prop][0].titlePL);
        this.props.data[prop][0].list.forEach((e,i) => {
          listElements.push(e);
        })
      }
    }
    let counter1 = 0;
    let counter2 = 0;
    return(
      <div className="mainDisplay__instructions">
        <h1 className="mainDisplay__header">{listTitle.join(" / ")}</h1>
          <table className="mainDisplay__table">
            <tbody className="mainDisplay__tbody">
                {listElements.map((e,i) => {
                  return (
                    <tr className="mainDisplay__tableTR" key={i}>
                      <td className="mainDisplay__tableTD" >{e.wordPL}</td>
                      <td className="mainDisplay__tableTD" >- {e.wordES}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
      </div>
    )
  }
}

export default MainDisplayList;
