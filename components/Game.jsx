import React from 'react';
import ReactDOM from 'react-dom';
import MainListsCardsDefault from '../components/MainListsCardsDefault.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import {Link} from 'react-router';

class Game extends React.Component {
  state = {
    answer: "",
    time: 60000,
    score: 0,
    try: 0,
    scoreStatus: "Weź sie za naukę człowieku!",
  }

  checkAnswer = (e) => {
    e.preventDefault();
    let bg = document.querySelector('body');
    let bgGame = document.querySelector('.game')
    let footer = document.querySelector('.footer')

    if (this.state.answer !== "" ) {
      if (this.state.answer.toLowerCase() === this.words[this.randomWord].wordES.toLowerCase()) {
        bg.style.background = "#89E224";
        bg.style.transition = "background 0.1s linear";
        footer.style.background = "#89E224";
        footer.style.transition = "background 0.1s linear";
        bg.style.backgroundImage = "url('../images/pinstripe-dark.png')";
        bgGame.style.background = "#89E224";
        bgGame.style.transition = "background 0.1s linear";
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
        score: this.state.score === 0 ? 0 : this.state.score - 1,
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
      }
    }, 1000);

  }

  canvas() {
    //canvas
    if (this.state.score >= 10 ) {
      let canvas = document.querySelector('.confetti');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = "fixed";
      canvas.style.left = 0;
      canvas.style.top = 0;
      canvas.style.bottom =0;
      canvas.style.right = 0;

      let ctx = canvas.getContext('2d');
      let pieces = [];
      let numberOfPieces = 50;
      let lastUpdateTime = Date.now();

      function randomColor () {
          let colors = ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0'];
          return colors[Math.floor(Math.random() * colors.length)];
      }

      function update () {
          let now = Date.now(),
              dt = now - lastUpdateTime;
          for (let i = pieces.length - 1; i >= 0; i--) {
              let p = pieces[i];
              if (p.y > canvas.height) {
                  pieces.splice(i, 1);
                  continue;
              }
              p.y += p.gravity * dt;
              p.rotation += p.rotationSpeed * dt;
          }
          while (pieces.length < numberOfPieces) {
              pieces.push(new Piece(Math.random() * canvas.width, -20));
          }
          lastUpdateTime = now;
          setTimeout(update, 1);
      }
      function draw () {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          pieces.forEach(function (p) {
              ctx.save();
              ctx.fillStyle = p.color;
              ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
              ctx.rotate(p.rotation);
              ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
              ctx.restore();
          });
          requestAnimationFrame(draw);
      }
      function Piece (x, y) {
          this.x = x;
          this.y = y;
          this.size = (Math.random() * 0.5 + 0.75) * 15;
          this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
          this.rotation = (Math.PI * 2) * Math.random();
          this.rotationSpeed = (Math.PI * 2) * (Math.random() - 0.5) * 0.001;
          this.color = randomColor();
      }
      while (pieces.length < numberOfPieces) {
          pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
      }
      update();
      draw();
    }

  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  componentDidUpdate() {
    if ((this.state.score >= 10 && this.state.try > 0) || this.state.time <= 0 ) {
      this.canvas();
    }
  }

  render(){
    console.log(this.props.data, this.randomWord, this.props.checkedLists.length );
    if (this.props.data === null || typeof this.randomWord === 'undefined' || this.props.checkedLists.length === 0) {
      return (
        <div className="backToMain__container">
          <Link to="/" className="backToMain">Wróć do strony głównej!</Link>
        </div>
      )
    }

    if ((this.state.score <= 0 && this.state.try > 0) || this.state.time <= 0 ) {
      return (
        <div className="app">
          <Nav />
          <div className="gameOver">
            <div className="gameOver__info">GAME OVER!</div>

            <p className="gameOver__score">Twój wynik: {this.state.score}</p>
            <p className="gameOver__opinion">{this.state.scoreStatus}</p>
            <canvas className="confetti"></canvas>
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
              <input className="game__random__input" onChange={this.compareValue} type="text" value={this.state.answer} onKeyPress={(e) => {
                if(e.key === 'Enter') {this.checkAnswer(e)}
              }}/>
              <button type="button" className="game__random__btn" onClick={this.checkAnswer}>Sprawdź</button>
            </div>
          </div>
          <Footer />
        </div>

    )
  }
}
export default Game;
