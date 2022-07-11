import Player from "./Player"

const CurrentTurn = ({ player }) => {
  return (
    <section className="current__turn">
      <Player player={ player } /> <span>Turn</span>
    </section>
  )
}
export default CurrentTurn