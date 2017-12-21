import React from 'react';
import ReactDOM from 'react-dom';

class MainDisplayInstructions extends React.Component {
  render(){
    return(
      <div className="mainDisplay__instructions">
        <h1 className="mainDisplay__header">INSTRUKCJA</h1>
        <ol className="mainDisplay--ol">
          <li>1. Wybierz interesujące Cię kategorie fiszek by wyświetlić listę słówek do nauki.</li>
          <li>2. Ucz się czytając ją z góry na dół i spowrotem, na głos, w myślach - wszystkie techniki dozwolone! Postaraj się zapamiętać jak najwięcej!</li>
          <li>3. Przetestuj swoje umiejętnosci w grze!</li>
          <li>* Przetłumacz jak najszybciej wylosowane słówko. Pamiętaj, że czas ucieka! Za każdą poprawną odpowiedź dostaniesz 2 pkt za każdą złą -1!</li>
        </ol>
      </div>
    )
  }
}

export default MainDisplayInstructions;
