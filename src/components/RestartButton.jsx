import RestartICON from '../assets/icon-restart.svg'

const RestartButton = ({ resetBoard, resetTurns, resetTilesX, resetTilesO }) => {  

  const RestartGame = () => {
    resetBoard(Array(9).fill(null));
    resetTurns("X");
    resetTilesX([]);
    resetTilesO([]);
  }

  return (
    <button className="restart__button" onClick={ () => RestartGame() }>
      <img src={ RestartICON } alt="Restart Game" />
    </button>
  )
}
export default RestartButton