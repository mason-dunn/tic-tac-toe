import { useState } from "react";
import GameBoard from "./components/GameBoard";
import NewGame from "./components/NewGame";

const App = () => {
  const [player, setPlayer] = useState('X');
  const [mode, setMode] = useState(true);

  return (
    <>
      { !mode && 
        <NewGame 
          player={ player } 
          setPlayer={ setPlayer }
          mode={ mode } 
          setMode={ setMode } 
        /> 
      } 
      { mode && <GameBoard mode={ mode }/> } 
    </>
    )
}
export default App