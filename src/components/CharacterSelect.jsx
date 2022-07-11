import PickCharacter from "./PickCharacter"

const CharacterSelect = ({ player, setPlayer }) => {
  return (
    <section className="character__select">
      <h4>Pick player 1's mark</h4>
      <PickCharacter player={ player } setPlayer={ setPlayer }/>
      <p className="character__select__tip">Remember : X goes first</p>
    </section>
  )
}
export default CharacterSelect