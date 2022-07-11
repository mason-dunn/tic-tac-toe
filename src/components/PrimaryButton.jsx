const PrimaryButton = ({ text, color }) => {
  return (
    <button className="primary__button" id={ color }>{ text }</button>
  )
}
export default PrimaryButton