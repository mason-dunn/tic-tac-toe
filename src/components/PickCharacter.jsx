import { useState } from 'react'
import Player from './Player'

const PickCharacter = ({ player, setPlayer }) => {
  return (
    <section className="pick__character">
      <section className="pick__character__wrapper">

        <section onClick={ () => setPlayer("X") } className="pick__character__x" id={ player === "X" ? "selected" : '' }>
          <Player player="X"/>
        </section>

        <section onClick={ () => setPlayer("O") } className="pick__character__o" id={ player === "O" ? "selected" : '' }>
          <Player player="O"/>
        </section>

      </section>
    </section>
  )
}
export default PickCharacter