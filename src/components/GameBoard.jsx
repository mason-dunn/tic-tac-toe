import { useState } from "react"
import CurrentTurn from "./CurrentTurn";
import RestartButton from './RestartButton'
import Logo from '../assets/logo.svg'
import Score from "./Score";
import XICON from '../assets/icon-x.svg'
import OICON from '../assets/icon-o.svg'


const GameBoard = ({ mode }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [tilesX, setTilesX] = useState([]);
  const [tilesO, setTilesO] = useState([]);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [draws, setDraws] = useState(0);
  
  function handleTurn(index) {
    if (currentTurn === "X") {
      if (board[index] === null) {
        board[index] = "X"; 
        tilesX.push(index);
        setCurrentTurn("O");
      }
    } else {
      if (board[index] === null) {
        board[index] = "O"; 
        tilesO.push(index);
        setCurrentTurn("X");
      }
    }
    
    checkBoard();
  }
  const WinningStates = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
  ]
  
  function checkBoard() {
    let tilesRemaining = 9 - (tilesX.length + tilesO.length);
    let WinX = false;
    let WinO = false;
    
    for(let state of WinningStates) {
      let X = tilesX.toString();
      let O = tilesO.toString();
      state = state.toString();
      
      if(X === state) {
        WinX = true;
        setScoreX(scoreX + 1);
      }
      if(O === state) {
        WinO = true;
        setScoreO(scoreO + 1);
      }
    }
    if (tilesRemaining === 0 && !WinX && !WinO) {
      setDraws(draws + 1);
    }
  }
  
  return (
    <section className="game__board">
      <section className="game__board__header">
        <div className="game__board__header__logo">
          <img src={ Logo } alt="Tic-Tac-Toe" />
        </div>
        <div className="game__board__header__turn">
          <CurrentTurn player={ currentTurn }/>
        </div>
        <div className="game__board__header__button">
          <RestartButton resetBoard={ setBoard } resetTurns={ setCurrentTurn } resetTilesX={setTilesX} resetTilesO={setTilesO}/>
        </div>
      </section>
      <section className="game__board__wrapper">
        <div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(0) }>
            { board[0] ? board[0] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[0] }
          </div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(1) }>
            { board[1] ? board[1] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[1] }
          </div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(2) }>
            { board[2] ? board[2] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[2] }
          </div>
        </div>
        <div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(3) }>
            { board[3] ? board[3] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[3] }
          </div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(4) }>
            { board[4] ? board[4] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[4] }
          </div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(5) }>
            { board[5] ? board[5] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[5] }
          </div>
        </div>
        <div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(6) }>
            { board[6] ? board[6] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[6] }
          </div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(7) }>
            { board[7] ? board[7] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[7] }
          </div>
          <div className="game__board__tile" id={currentTurn} onClick={ () => handleTurn(8) }>
            { board[8] ? board[8] === "X" ? <img src={XICON} /> : <img src={OICON}/> : board[8] }
          </div>
        </div>
      </section>
      <section className="game__board__scores">
        <Score player="X" score={scoreX}/>
        <Score player="D" score={draws}/>
        <Score player="O" score={scoreO}/>
      </section>
    </section>
  )
}
export default GameBoard