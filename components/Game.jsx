import React from 'react';
import ReactDOM from 'react-dom';
import MainListsCardsDefault from '../components/MainListsCardsDefault.jsx';


class Game extends React.Component {
  state = {
    data: null,
    answer: "",
  }

//inicjalizator właściwości
  checkAnswer = () => {
    console.log(this.state.answer);
    let bg = document.querySelector('body');

    if (this.state.answer === this.words[this.randomWord].wordES) {
      console.log("Poprawna odpowiedź");
      bg.style.background = "#89E224";
      bg.style.backgroundImage = "url('../images/pinstripe-dark.png')";
      let changeBg = setTimeout(() => {
        bg.style.background = "";
        this.randIndex();
      }, 400);
    }else {
      console.log("Błędna odpowiedź");
      bg.style.background = "#f41823";
      bg.style.backgroundImage = "url('../images/pinstripe-dark.png')";
      let changeBg = setTimeout(function(){ bg.style.background = ""; }, 400);

    }
  }
  compareValue = (e) => {
    this.setState({
      answer: e.currentTarget.value,
    })
  }

  randIndex() {
    this.randomWord = Math.floor(Math.random() * (this.words.length));
    console.log(this.randomWord);
    this.setState({
      answer: "",
    });
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

      this.words = [];
      for (let prop in data) {
        data[prop].forEach((e,i) => {
          e.list.forEach((e2, i2) => {
            this.words.push(e2);
          })
        })
      }
      //Wywołanie funkcji losującej
      this.randIndex();
      //Zmiana data na wylosowaną wartosc
      this.setState({
        data: data,
      });
    });
  }

  render(){
    if (this.state.data === null) {
      return <p>Loading...</p>;
    }

    return(
      <div className="game">
        <div className="game_random">
          <h1>{this.words[this.randomWord].wordPL}</h1>
          <input onChange={this.compareValue} type="text" value={this.state.answer}/>
          <button onClick={this.checkAnswer}>Sprawdź</button>
        </div>
      </div>
    )
  }
}

export default Game;
