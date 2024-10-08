interface Props {
	text: string,
	onclick?: () => undefined,
}

function Button({text, onclick = () => {}}: Props) {
  return (
	<button onClick={onclick()}>{text}</button>
  )
}

export default Button