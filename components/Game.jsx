import React from 'react';
import ReactDOM from 'react-dom';
import MainListsCardsDefault from '../components/MainListsCardsDefault.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

class Game extends React.Component {
  state = {
    answer: "",
    time: 60000,
    score: 0,
    try: 0,
    scoreStatus: "Weź sie za naukę człowieku!",
  }

  // randomWord = 0

//inicjalizator właściwości
  checkAnswer = () => {
    console.log(this.state.answer);
    let bg = document.querySelector('body');
    let bgGame = document.querySelector('.game')
    let footer = document.querySelector('.footer')

    if (this.state.answer !== "" ) {
      if (this.state.answer.toLowerCase() === this.words[this.randomWord].wordES.toLowerCase()) {
        //Zmiana styli
        bg.style.background = "#89E224";
        footer.style.background = "#89E224";
        bg.style.backgroundImage = "url('../images/pinstripe-dark.png')";
        bgGame.style.background = "#89E224";
        let changeBg = setTimeout(() => {
          bg.style.background = "";
          footer.style.background = "";
          bgGame.style.background = "";
          this.randIndex();
        }, 400);
        this.setState({
          score: this.state.score + 2,
          try: this.state.try + 1,
        })
      }else {
        //Zmiana styli
        bg.style.background = "#f41823";
        footer.style.background = "#f41823";
        bg.style.backgroundImage = "url('../images/pinstripe-dark.png')";
        bgGame.style.background = "#f41823";
        let changeBg = setTimeout(function(){
           bg.style.background = "";
           footer.style.background = "";
           bgGame.style.background = "";
         }, 400);
         this.setState({
          score: this.state.score - 1,
          try: this.state.try + 1,
         })
      }
    }

    if (this.state.score >= 10) {
      this.setState({
        scoreStatus: "Brawo! Jesteś geniuszem językowym :)"
      })
    }else if (this.state.score >= 5) {
      this.setState({
        scoreStatus: "Musisz się jeszcze trochę poduczyc..."
      })
    }else {
      this.setState({
        scoreStatus: "Weź sie za naukę człowieku!"
      })
    }
  }

  compareValue = (e) => {
    this.setState({
      answer: e.currentTarget.value,
    })
  }

  randIndex() {
    this.randomWord = Math.floor(Math.random() * (this.words.length));
    this.setState({
      answer: "",
    });
  }
  componentWillUpdate() {
    if (this.props.data !== null && typeof this.randomWord === 'undefined') {
      this.words = [];
      for (let prop in this.props.data) {
        if (this.props.checkedLists.indexOf(prop) >= 0) {
          this.props.data[prop].forEach((e,i) => {
            e.list.forEach((e2, i2) => {
              this.words.push(e2);
            })
          })
        }
      }
      this.randIndex();
    }
  }
  componentDidMount() {
    this.time = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({
          time: this.state.time - 1000,
        })
      }else {

      }
    }, 1000);
  }
   componentWillUnmount() {
     clearInterval(this.time);
   }
  render(){
    if (this.props.data === null || typeof this.randomWord === 'undefined') {
      return <p className="loading">Loading...</p>;
    }




    //Wywołanie funkcji losującej
    // if (typeof this.randomWord === 'undefined') {
    //
    // }



    if ((this.state.score <= 0 && this.state.try > 0) || this.state.time <= 0 ) {
      return (
        <div className="app">
          <Nav />
          <div className="gameOver">
            <div className="gameOver__info">GAME OVER!</div>
            <p className="gameOver__score">Twój wynik: {this.state.score}</p>
            <p className="gameOver__opinion">{this.state.scoreStatus}</p>
          </div>
          <Footer />
        </div>
      )
    }
    return(
      <div className="app">
          <Nav />
        <div className="game">
          <div className="game__info">
            <span className="game__time">Time: {Math.floor(this.state.time / 1000)} s </span>
            <span className="game__score">Score: {this.state.score}</span>
          </div>
          <div className="game__random">
            <h1 className="game__random__header">{this.words[this.randomWord].wordPL}</h1>
            <input className="game__random__input" onChange={this.compareValue} type="text" value={this.state.answer}/>
            <button className="game__random__btn" onClick={this.checkAnswer}>Sprawdź</button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Game;
