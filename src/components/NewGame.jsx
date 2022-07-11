import CharacterSelect from "../components/CharacterSelect"
import ModeSelect from "../components/ModeSelect"
import Logo from '../assets/logo.svg'

const NewGame = ({ player, setPlayer, mode, setMode }) => {
  return (
    <section className="new__game">
      <img src={ Logo } alt="Tic-Tac-Toe" />
      <CharacterSelect player={ player } setPlayer={ setPlayer }/>
      <ModeSelect mode={ mode } setMode={ setMode }/>
    </section>
  )
}
export default NewGame