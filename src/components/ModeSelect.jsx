import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton"

const ModeSelect = ({ mode, setMode }) => {
  const [selection, setSelection] = useState();

  return (
    <section className="mode__select">
      <PrimaryButton text="New game (vs CPU)" color="yellow" />
      <PrimaryButton text="New game (vs Player)" color="blue" />
    </section>
  )
}
export default ModeSelect