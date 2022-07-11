const Score = ({ player, score }) => {
  return (
    <section className="score__card" id={ player }>
      { player === "X" ? <h4>X (You)</h4> : player === "O" ? <h4>O (CPU)</h4> : <h4>Ties</h4>}
      <h2>{ score }</h2>
    </section>
  )
}
export default Score